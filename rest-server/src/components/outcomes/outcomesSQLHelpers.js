export const fetchStarredMatchesHelper = () => {
  return `
  SELECT match.id, user1_id, USER2_id, activevoting, starred, decision FROM MATCH
  INNER JOIN outcomes
  ON match.id=outcomes.matchid
  WHERE starred=1
  AND outcomes.userid=$1
  `;
};

export const fetchUnstarredMatchesHelper = () => {
  return `
  SELECT match.id, user1_id, USER2_id, activevoting, starred, decision FROM MATCH
  INNER JOIN outcomes
  ON match.id=outcomes.matchid
  WHERE starred=0
  AND outcomes.userid=$1
  `;
};

export const starSingleMatchHelper = () => {
  return `
  UPDATE outcomes
  SET starred = 1
  WHERE matchid=$1
  AND userid=$2
  `;
};

export const unstarSingleMatchHelper = () => {
  return `
  UPDATE outcomes
  SET starred = 0
  WHERE matchid=$1
  AND userid = $2
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
