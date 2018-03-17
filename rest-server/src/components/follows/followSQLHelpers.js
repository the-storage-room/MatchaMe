export const fetchStarredMatchesHelper = (userid) => {
  return `
  SELECT * FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id
  INNER JOIN users ON follow.userid = users.id
  WHERE userid = '${userid}'
  AND starred = '1'
  `;
};

export const fetchUnstarredMatchesHelper = (userid) => {
  return `
  SELECT * FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id
  INNER JOIN users ON follow.userid = users.id
  WHERE userid =${userid}
  AND starred = '0'
  `;
};

export const starSingleMatchHelper = (userid) => {
  return `
  SELECT * FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id 
  INNER JOIN users ON match.user1_id = users.id OR MATCH.user2_id = users.id
  WHERE userid =${userid} 
  `;
};

export const unstarSingleMatchHelper = (userid) => {
  return `
  SELECT * FROM follow
  INNER JOIN MATCH ON follow.matchid = match.id 
  INNER JOIN users ON match.user1_id = users.id OR MATCH.user2_id = users.id
  WHERE userid =${userid}
  `;
};


//SELECT * FROM follow WHERE star = TRUE ::: userid, matchid, 