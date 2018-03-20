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
    UPDATE user
    SET powerranking = powerranking + '1'
    FROM approve
    INNER JOIN successfulMatch ON approve.matchid = successfulMatch.matchid
    WHERE successfulMatch.isSuccessful = '1'
    AND users.id = approved.userid
    RETURNING *
  `;
};
