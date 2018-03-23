export const fetchStageTwoHelper = ({ id }) => {
  return `
  SELECT * FROM stagetwo
  WHERE id=${id};
  `;
};

export const acceptStageTwoHelper = ({ id, userId }) => {
  return [
    `UPDATE stagetwo SET issuccessful=1 WHERE id=${id} AND firstdecision IS NOT NULL RETURNING *;`,
    `UPDATE stagetwo SET firstdecision=${userId} WHERE id=${id} RETURNING *;`
  ];
};

export const rejectStageTwoHelper = ({ id }) => {
  return `
  UPDATE stagetwo
  SET active=0
  WHERE id=${id}
  RETURNING *;
  `;
};

export const ghostStageTwoHelper = () => {
  return `
  
  `;
};

export const addStageTwoHelper = ({ matchId }) => {
  return `
  INSERT INTO stagetwo
  (matchid) VALUES (${matchId})
  `;
};
