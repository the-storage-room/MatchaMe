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

export const updateAcceptedUserRankingHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking + '1'
  FROM outcomes
  INNER JOIN successfulmatch ON outcomes.matchid = successfulmatch.matchid
  WHERE successfulmatch.issuccessful = '1'
  AND users.id = outcomes.userid
  RETURNING *
  `;
};

export const updateRejectedUserRankingHelper = () => {
  return `
  UPDATE USERs
  SET powerranking = powerranking - '1'
  FROM outcomes
  INNER JOIN successfulmatch ON outcomes.matchid = successfulmatch.matchid
  WHERE successfulmatch.issuccessful = '0'
  AND users.id = outcomes.userid
  RETURNING *
  `
}

/*UPDATE users
SET powerranking = powerranking - '1' 
FROM outcomes
INNER JOIN successfulmatch ON outcomes.matchid = successfulmatch.matchid
WHERE successfulmatch.issuccessful = '0' 
AND users.id = outcomes.userid
RETURNING **/

// -- issuccessful is true, increase for users who voted yes

// UPDATE users
// SET powerranking = powerranking + '1'
// FROM yesUsers
// INNER JOIN stagetwo ON stagetwo.matchid = yesUsers.matchid
// WHERE stagetwo.issuccessful = '1'
// AND users.id = yesUsers.id
// --
// UPDATE users
// SET powerranking = powerranking + '1'
// FROM outcomes
// INNER JOIN stagtwo ON stagetwo.matchid = outcomes.matchid
// WHERE successfulmatch.issuccessful = '1'
// AND users.id = outcomes.userid
// returning*

// -- issuccessful is true, decrease for users who voted no
// -- issuccessful is false, increase for users who voted no
// -- issuccessful is false, decrease for users who voted yes

