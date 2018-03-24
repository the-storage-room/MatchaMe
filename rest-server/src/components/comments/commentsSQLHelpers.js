
export const fetchCommentsHelper = () => {
  return `
    SELECT id, comment, userid
    FROM COMMENTS
    WHERE comments.matchid = $1
  `;
};

export const addCommentHelper = () => {
  return `
  INSERT INTO comments (
    userid,
    matchid,
    type,
    comment
  )
  VALUES (
    $1,
    $2,
    $3,
    $4
  )
  `;
};

export const voteOnCommentHelper = vote => {
  if (vote === '0') {
    return `
      UPDATE comments
      SET votes=(votes+1)
      WHERE id=$1
    `;
  } else {
    return `
      UPDATE comments
      SET votes=(votes-1)
      WHERE id=$1
    `;
  }
};

export const fetchTopCommentHelper = () => {
  return `
    SELECT comments.id, comment, username FROM USERS
    INNER JOIN comments
    ON users.id=comments.userid
    WHERE matchid=$1
  `;
};