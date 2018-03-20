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

export const updateUserBioHelper = (bio, username) => {
  return `
    UPDATE users 
    SET bio='${bio}'
    WHERE username='${username}'
    RETURNING bio
  `;
};

export const updateUserAgeHelper = (age, username) => {
  return `
    UPDATE users 
    SET age='${age}'
    WHERE username='${username}'
    RETURNING age
  `;
};

export const updateUserLocationHelper = (location, username) => {
  return `
    UPDATE users 
    SET location='${location}'
    WHERE username='${username}'
    RETURNING location 
  `
};

export const updateUserGenderHelper = (gender, username) => {
  return `
    UPDATE users
    SET gender='${gender}'
    WHERE username='${username}'
    RETURNING gender
  `
};

