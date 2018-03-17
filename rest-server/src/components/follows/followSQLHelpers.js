export const fetchStarredMatchesHelper = (userid) => {
  return `
  SELECT username FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id
  INNER JOIN users ON follow.userid = users.id
  OR match.user1_id = users.id OR match.user2_id = users.id
  WHERE userid = '1'
  AND starred = '0'
  `;
};

export const fetchUnstarredMatchesHelper = () => {
  return `
    SELECT *
    FROM follow
    WHERE star = FALSE
  `;
};

export const starSingleMatchHelper = () => {
  return `

  `;
};

export const unstarSingleMatchHelper = () => {
  return `
  
  `;
};


//SELECT * FROM follow WHERE star = TRUE ::: userid, matchid, 