// fetch multiple matches to vote on, based on user params
export const fetchPendingMatchmakingHelper = userId => {
  return `
  SELECT * FROM MATCH
  WHERE NOT user1_id=${userId}
  AND NOT user2_id=${userId};
  `;
};

// approve or disapprove a match
export const updateMatchmakingHelper = (matchId, decision) => {
  if (decision === 'approved') {
    return `
    UPDATE MATCH 
    SET approvedcount = approvedcount + 1
    WHERE id=${matchId}
    RETURNING *;
    `;
  }
  if (decision === 'rejected') {
    return `
    UPDATE MATCH 
    SET rejectedcount = rejectedcount + 1
    WHERE id=${matchId}
    RETURNING *;
    `;
  }
};

export const inactivateMatchMakingHelper = ({ matchId }) => {
  return `
  UPDATE MATCH
  SET activevoting = 0
  WHERE id=${matchId}
  RETURNING *;
  `;
};
