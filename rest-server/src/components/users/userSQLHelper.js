export const fetchAllUsersHelper = () => {
  return `
  SELECT users.id, users.username, users.email, users.lastname, users.firstname,
    users.age, users.location, users.gender, users.preference, users.bio,
    users.powerranking, users.signupcomplete
  FROM users;
  `;
};

export const fetchSingleUserHelper = userId => {
  return `
  SELECT users.id, users.username, users.email, users.lastname, users.firstname,
    users.age, users.location, users.gender, users.preference, users.bio,
    users.powerranking, users.signupcomplete
  FROM users
  WHERE users.id=${userId};
  `;
};

export const fetchMultipleUsersHelper = ({ min, max }) => {
  return `
    SELECT firstname, lastname, age, location, url, primaryphoto
    FROM USERS
    INNER JOIN PHOTO on USERS.id=PHOTO.userid
    WHERE users.attractiveness > '${min}'
    AND user.attractiveness < '${max}'
  ` 
};

export const fetchUsersTagsHelper = ({ min, max }) => {
  return `
    SELECT tags  
    FROM USERS
    INNER JOIN USERS_TAGS on USERS.id=USERS_TAGS.userid
    INNER JOIN TAGS on USERS_TAGS.tagid=TAGS.id
    WHERE users.attractiveness > '${min}'
    AND user.attractiveness < '${max}'
  `;
};

export const fetchUserPhotos = ({ id }) => {
  return `
    SELECT 
  `;
};


export const updateUserAttractivenessHelper = ({ id, attractiveness }) => {
  return `
    UPDATE users
    SET attractiveness=${attractiveness}
    WHERE id=${id}
  `;
};

export const updateUserInfoHelper = (setting, newInfo, id) => {
  return `
    UPDATE users 
    SET ${setting}='${newInfo}'
    WHERE id='${id}'
    RETURNING ${setting}
  `;
};

//increase power ranking by one for matchmakers who voted 'yes' on a successful match
export const updateAndIncreasePRForTrueAndYesHelper = matchId => {
  return `
  UPDATE users
  SET powerranking = powerranking + '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  INNER JOIN MATCH ON match.id = stageTwo.matchid
  WHERE stagetwo.issuccessful = '1'
  AND users.id = outcomes.userid 
  AND outcomes.decision = 'approved'
  AND match.id = '${matchId}'
  `;
};

//decrease power ranking by one for matchmakers who voted 'no' on a successful match
export const updateAndDecreasePRForTrueAndNoHelper = matchId => {
  return `
  UPDATE users
  SET powerranking = powerranking - '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  INNER JOIN MATCH ON match.id = stageTwo.matchid
  WHERE stageTwo.issuccessful = '1'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'rejected'
  AND match.id = '${matchId}'
  `;
};

//increase power ranking by one for matchmakers who voted 'no' on an unsuccessful match
export const updateAndIncreasePRForFalseAndNoHelper = matchId => {
  return `
  UPDATE users
  SET powerranking = powerranking + '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  INNER JOIN MATCH ON match.id = stageTwo.matchid
  WHERE stageTwo.issuccessful = '0'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'rejected'
  AND match.id = '${matchId}'
  `;
};

//decrease power ranking by one for matchmakers who voted 'yes' on an unsuccessful match
export const updateAndIncreasePRForFalseAndYesHelper = matchId => {
  return `
  UPDATE users
  SET powerranking = powerranking - '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  INNER JOIN MATCH ON match.id = stageTwo.matchid
  WHERE stageTwo.issuccessful = '0'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'approved'
  AND match.id = '${matchId}'
  `;
};
