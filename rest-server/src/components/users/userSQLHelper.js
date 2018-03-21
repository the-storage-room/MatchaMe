export const fetchAllUsersHelper = () => {
  return `
    
  `;
};

export const fetchSingleUserHelper = ({ userId }) => {
  return `
  SELECT * FROM users
  WHERE id=${userId};
  `;
};

export const fetchMultipleUsersHelper = () => {
  return `

  `;
};

export const updateUserRatingHelper = ({ id, attractiveness }) => {
  return `
    UPDATE users
    SET attractiveness=${attractiveness}
    WHERE id=${id}
  `;
};

export const updateUserInfoHelper = (setting, newInfo, username) => {
  return `
    UPDATE users 
    SET ${setting}='${newInfo}'
    WHERE username='${username}'
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
