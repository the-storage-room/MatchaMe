// fetch multiple matches to vote on, based on user params
export const fetchPendingMatchmakingHelper = userId => {
  return `
  SELECT * FROM MATCH
  WHERE user1_id=${userId}
  OR user2_id=${userId}
  `;
};

// approve or disapprove a match
export const updateMatchmakingHelper = body => {
  console.log(body);
  const { userId, matchId, decision } = body;
  if (decision === 'approved') {
    return `
    INSERT INTO MATCH 
    (approvedcount, usersapproved) 
    VALUES (approvedcount + 1, '{${userId}}')
    WHERE id=${matchId}
    RETURNING *;
    `;
  }
  if (decision === 'rejected') {
    return `
    UPDATE MATCH
    SET rejectedcount = rejectedcount + 1
    SET usersrejected = usersrejected || ${userId}
    WHERE id=${matchId}
    RETURNING *;
    `;
  }
};
