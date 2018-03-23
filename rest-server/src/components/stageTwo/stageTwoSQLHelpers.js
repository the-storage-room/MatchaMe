export const fetchStageTwoHelper = () => {
  return `
  SELECT * FROM stagetwo
  WHERE id=$1;
  `;
};

export const acceptStageTwoHelper = () => {
  return [
    `UPDATE stagetwo SET issuccessful=1 WHERE id=$1 AND firstdecision IS NOT NULL RETURNING *;`,
    `UPDATE stagetwo SET firstdecision=$1 WHERE id=$2 RETURNING *;`
  ];
};

export const rejectStageTwoHelper = () => {
  return `
  UPDATE stagetwo
  SET active=0
  WHERE id=$1
  RETURNING *;
  `;
};

export const ghostStageTwoHelper = () => {
  return `
  
  `;
};

export const addStageTwoHelper = () => {
  return `
  INSERT INTO stagetwo
  (matchid) VALUES ($1)
  RETURNING *;
  `;
};
