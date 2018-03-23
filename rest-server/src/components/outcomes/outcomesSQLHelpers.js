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

export const starSingleMatchHelper = (userId, matchId) => {
  return `
  UPDATE outcomes
  SET starred = 1
  WHERE matchid=${matchId}
  AND userid=${userId}
  `;
};

export const unstarSingleMatchHelper = (userId, matchId) => {
  return `
  UPDATE outcomes
  SET starred = 0
  WHERE matchid=${matchId}
  AND userid = ${userId}
  `;
};

export const addOutcomesHelper = ({
  userId,
  matchId,
  starred = 0,
  decision
}) => {
  return `
  INSERT INTO outcomes
  (userid, matchid, starred, decision)
  VALUES (${userId}, ${matchId}, ${starred}, '${decision}')
  RETURNING *;
  `;
};

export const fetchOneOutcomesHelper = ({ userId, matchId }) => {
  return `
  SELECT * FROM outcomes
  WHERE userid=${userId} AND matchid=${matchId};
  `;
};
