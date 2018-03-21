export const fetchStageTwoHelper = () => {
  return `

  `;
};

export const acceptStageTwoHelper = () => {
  return `

  `;
};

export const rejectStageTwoHelper = () => {
  return `

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
