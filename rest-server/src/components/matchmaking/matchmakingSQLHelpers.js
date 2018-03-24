// fetch multiple matches to vote on, based on user params
export const fetchPendingMatchmakingHelper = () => {
  return `
  SELECT * FROM MATCH
  WHERE NOT user1_id=$1
  AND NOT user2_id=$1;
  AND id NOT IN ((SELECT matchid FROM outcomes WHERE userid=$1))
  LIMIT 20
  `;
};

// approve or disapprove a match
export const updateMatchmakingHelper = decision => {
  if (decision === 'approved') {
    return `
    UPDATE MATCH 
    SET approvedcount = approvedcount + 1
    WHERE id=$1
    RETURNING *;
    `;
  }
  if (decision === 'rejected') {
    return `
    UPDATE MATCH 
    SET rejectedcount = rejectedcount + 1
    WHERE id=$1
    RETURNING *;
    `;
  }
};

export const inactivateMatchMakingHelper = () => {
  return `
  UPDATE MATCH
  SET activevoting = 0
  WHERE id=$1
  RETURNING *;
  `;
};
