export const fetchAllUsersHelper = () => {
  return `
  SELECT users.id, users.username, users.email, users.lastname, users.firstname,
    users.age, users.location, users.gender, users.preference, users.bio,
    users.powerranking, users.signupcomplete
  FROM users;
  `;
};

export const fetchSingleUserHelper = () => {
  return `
  SELECT users.id, users.username, users.email, users.lastname, users.firstname,
    users.age, users.location, users.gender, users.preference, users.bio,
    users.powerranking, users.signupcomplete
  FROM users
  WHERE users.id=$1;
  `;
};

export const fetchMultipleUsersHelper = () => {
  return `
    SELECT id, firstname, lastname, age, location, bio, gender
    FROM USERS
    WHERE users.averageattractiveness > $1
    AND users.averageattractiveness < $2
  ` 
};

export const fetchUsersTagsHelper = () => {
  return `
    SELECT tag, users.id
    FROM TAGS
    INNER JOIN USERS_TAGS on TAGS.id=USERS_TAGS.tagid
    INNER JOIN USERS on USERS_TAGS.userid=USERS.id
    WHERE users.averageattractiveness > $1
    AND users.averageattractiveness < $2
  `;
};

export const fetchUsersPhotosHelper = () => {
  return `
    SELECT url, users.id 
    FROM PHOTO
    INNER JOIN USERS on USERS.id=PHOTO.userid
    WHERE users.averageattractiveness > $1
    AND users.averageattractiveness < $2
  `;
};


export const updateUserAttractivenessHelper = () => {
  return `
    UPDATE users
    SET totalattractiveness=(totalattractiveness+$1)
    WHERE id=$2
  `;
};

export const updateUserInfoHelper = () => {
  return `
    UPDATE users 
    SET $1=$2
    WHERE id=$3
    RETURNING $1
  `;
};

//increase power ranking by one for matchmakers who voted 'yes' on a successful match
export const updateAndIncreasePRForTrueAndYesHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking + '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  INNER JOIN MATCH ON match.id = stageTwo.matchid
  WHERE stagetwo.issuccessful = '1'
  AND users.id = outcomes.userid 
  AND outcomes.decision = 'approved'
  AND match.id = $1
  `;
};

//decrease power ranking by one for matchmakers who voted 'no' on a successful match
export const updateAndDecreasePRForTrueAndNoHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking - '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  INNER JOIN MATCH ON match.id = stageTwo.matchid
  WHERE stageTwo.issuccessful = '1'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'rejected'
  AND match.id = $1
  `;
};

//increase power ranking by one for matchmakers who voted 'no' on an unsuccessful match
export const updateAndIncreasePRForFalseAndNoHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking + '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  INNER JOIN MATCH ON match.id = stageTwo.matchid
  WHERE stageTwo.issuccessful = '0'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'rejected'
  AND match.id = $1
  `;
};

//decrease power ranking by one for matchmakers who voted 'yes' on an unsuccessful match
export const updateAndIncreasePRForFalseAndYesHelper = () => {
  return `
  UPDATE users
  SET powerranking = powerranking - '1'
  FROM outcomes
  INNER JOIN stageTwo ON outcomes.matchid = stageTwo.matchid
  INNER JOIN MATCH ON match.id = stageTwo.matchid
  WHERE stageTwo.issuccessful = '0'
  AND users.id = outcomes.userid
  AND outcomes.decision = 'approved'
  AND match.id = $1
  `;
};
