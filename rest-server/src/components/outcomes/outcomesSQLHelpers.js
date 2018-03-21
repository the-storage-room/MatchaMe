export const fetchStarredMatchesHelper = () => {
  return `
  SELECT username, gender, matchid FROM outcomes
  INNER JOIN MATCH ON outcomes.matchid = match.id
  INNER JOIN users ON match.user1_id = users.id OR match.user2_id = users.id
  WHERE starred = '1' 
  `;
};

export const fetchUnstarredMatchesHelper = () => {
  return `
  SELECT username, matchid FROM outcomes
  INNER JOIN MATCH ON outcomes.matchid = match.id
  INNER JOIN users ON outcomes.userid = users.id OR match.user1_id = users.id OR match.user2_id = users.id
  WHERE starred = '0' 
  `;
};

export const starSingleMatchHelper = body => {
  return `
  UPDATE follow
  SET starred = ${body.starred}
  WHERE matchid=${body.matchid}
  `;
};

export const unstarSingleMatchHelper = body => {
  return `
  UPDATE follow
  SET starred = ${body.starred}
  WHERE matchid=${body.matchid}
  `;
};

export const addOutcomesHelper = ({ userId, matchId, starred, decision }) => {
  return `
  INSERT INTO outcomes
  (userid, matchid, starred, decision)
  VALUES (${userId}, ${matchId}, ${starred}, '${decision}')
  RETURNING *;
  `;
};
