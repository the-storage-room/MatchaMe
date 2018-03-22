export const fetchStarredMatchesHelper = ({ userId }) => {
  return `
  SELECT match.id, user1_id, USER2_id, activevoting, starred, decision FROM MATCH
  INNER JOIN outcomes
  ON match.id=outcomes.matchid
  WHERE starred=1
  AND outcomes.userid=${userId}
  `;
};

export const fetchUnstarredMatchesHelper = ({ userId }) => {
  return `
  SELECT match.id, user1_id, USER2_id, activevoting, starred, decision FROM MATCH
  INNER JOIN outcomes
  ON match.id=outcomes.matchid
  WHERE starred=0
  AND outcomes.userid=${userId}
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
