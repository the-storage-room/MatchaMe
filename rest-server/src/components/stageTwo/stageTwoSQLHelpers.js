export const fetchStageTwoHelper = () => {
  return `
  SELECT stagetwo.id, stagetwo.matchid, stagetwo.issuccessful, stagetwo.firstaccept, 
  stagetwo.secondaccept, stagetwo.firstrejection, match.user1_id, match.user2_id FROM stagetwo
  INNER JOIN MATCH ON match.id=stagetwo.matchid
  WHERE user1_id=$1 AND active=1 OR user2_id=$1 AND active=1
  LIMIT 1;
  `;
};

export const acceptStageTwoHelper = () => {
  return [
    `UPDATE stagetwo SET issuccessful=1, secondaccept=$1 WHERE id=$2 AND firstdecision IS NOT NULL RETURNING *;`,
    `UPDATE stagetwo SET firstaccept=$1 WHERE id=$2 RETURNING *;`
  ];
};

export const rejectStageTwoHelper = () => {
  return `
  UPDATE stagetwo
  SET active=0, firstRejection=$2
  WHERE id=$1
  RETURNING *;
  `;
};

export const endStageTwoHelper = () => {
  return `
  UPDATE stagetwo
  SET active=0
  WHERE id=$1
  RETURNING *;
  `;
};

export const addStageTwoHelper = () => {
  return `
  INSERT INTO stagetwo
  (matchid) VALUES ($1)
  RETURNING *;
  `;
};
