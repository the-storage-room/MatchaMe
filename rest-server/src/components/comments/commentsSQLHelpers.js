export const fetchCommentsHelper = () => {
  return `
    SELECT comments.id, comment, username, votes
    FROM COMMENTS
    INNER JOIN users ON comments.userid=users.id
    WHERE comments.matchid = $1
    ORDER BY comments.id DESC;
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
  if (vote === '1') {
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
    ORDER BY votes DESC
    LIMIT 1;
  `;
};
