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

export const updateUserBioHelper = (body) => {
  return `
    UPDATE users 
    SET bio='${body.bio}'
    WHERE username='${body.username}'
    RETURNING bio
  `;
};

export const updateUserAgeHelper = (body) => {
  
}