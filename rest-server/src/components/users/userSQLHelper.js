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
