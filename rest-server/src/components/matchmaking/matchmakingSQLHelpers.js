// fetch multiple matches to vote on, based on user params
export const fetchPendingMatchmakingHelper = userId => {
  return `
  SELECT * FROM MATCH
  WHERE user1_id=$1
  OR user2_id=$1
  `;
};

// approve or disapprove a match
export const updateMatchmakingHelper = (decision) => {
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
