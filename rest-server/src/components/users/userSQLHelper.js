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
  `;
};

export const updateUserGenderHelper = (gender, username) => {
  return `
    UPDATE users
    SET gender='${gender}'
    WHERE username='${username}'
    RETURNING gender
  `;
};

export const updateUserPreferenceHelper = (preference, username) => {
  return `
    UPDATE users 
    SET preference='${preference}'
    WHERE username='${username}'
    RETURNING preference
  `;
};

export const updateUserEmailHelper = (email, username) => {
  return `
    UPDATE users
    SET email='${email}
    WHERE username='${username}
    RETURNING email
  `;
};

export const updateFirstNameHelper = (firstName, username) => {
  return `
    UPDATE users
  `;
};

// !! Will implement later ->

// export const updateUsernameHelper = (newUsername, oldUsername) => {
//   return `
//     UPDATE users
//     SET username='${newUsername}'
//     WHERE username='${oldUsername}'
//     RETURNING username
//   `;
// }
