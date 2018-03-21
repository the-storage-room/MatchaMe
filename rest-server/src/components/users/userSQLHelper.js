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

//increase power ranking by one for matchmakers who voted 'yes' on a successful match
export const updateAndIncreasePRForTrueAndYesHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking + '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  WHERE stagetwo.issuccessful = '1'
  AND users.id = outcomes.userid 
  AND outcomes.decision = 'approved'
  `;
};

//decrease power ranking by one for matchmakers who voted 'no' on a successful match
export const updateAndDecreasePRForTrueAndNoHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking - '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  WHERE stageTwo.issuccessful = '1'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'rejected'
  `
}

//increase power ranking by one for matchmakers who voted 'no' on an unsuccessful match
export const updateAndIncreasePRForFalseAndNoHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking + '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  WHERE stageTwo.issuccessful = '0'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'rejected'
  `
}

//decrease power ranking by one for matchmakers who voted 'yes' on an unsuccessful match
export const updateAndIncreasePRForFalseAndYesHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking - '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  WHERE stageTwo.issuccessful = '0'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'approved'
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


/*with split tables*/
//-- who voted correctly
/*UPDATE users
SET powerranking = powerranking + '1'
FROM yes_Users 
INNER JOIN stage_two ON stage_two.matchid = yes_Users.matchid
WHERE stage_two.issuccessful = '1'
AND users.id = yes_Users.userid*/

// --who voted incorrectly
// UPDATE users
// SET powerranking = powerranking - '1'
// FROM no_Users 
// INNER JOIN stage_two ON stage_two.matchid = no_Users.matchid
// WHERE stage_two.issuccessful = '1'
// AND users.id = no_Users.userid


/**
 * updateAndIncreasePRForTrueAndYes
 * updateAndDecreasePRForTrueAndNo
 * 
 * updateAndInceasePRForFalseAndNo
 * updateAndIncreasePRForFalseAndYes
 */

