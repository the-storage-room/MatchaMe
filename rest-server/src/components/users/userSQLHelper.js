export const fetchAllUsersHelper = () => {
  return `
    
  `;
};

export const fetchSingleUserHelper = () => {
  return `
  
  `;
};

export const fetchMultipleUsersHelper = () => {
  return `
  
  `;
};

export const updateUserRatingHelper = () => {
  return `
  
  `;
}

export const updateUserInfoHelper = (setting, newInfo, username) => {
  return `
    UPDATE users 
    SET ${setting}='${newInfo}'
    WHERE username='${username}'
    RETURNING ${setting}
  `;
};

export const updateUserRankingHelper = () => {
  return `
  UPDATE USERs
  SET powerranking = powerranking + '1'
  FROM outcomes
  INNER JOIN successfulmatch ON outcomes.matchid = successfulmatch.matchid
  WHERE successfulmatch.issuccessful = '1'
  AND users.id = outcomes.userid
  RETURNING *
  `;
};
