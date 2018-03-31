export const filterUsersHelper = (
  max,
  min,
  preferredGenderString,
  preferenceString,
  userId
) => {
  return `
  SELECT id, age, location, gender, preference, averageattractiveness
  FROM users
  WHERE signupcomplete=true
  AND averageattractiveness < ${max}
  AND averageattractiveness > ${min}
  AND (${preferredGenderString})
  AND (${preferenceString})
  AND id NOT IN (
      (SELECT match.user2_id FROM MATCH
      WHERE match.user1_id=${userId})
  )
  AND id NOT IN (
      (SELECT match.user1_id FROM MATCH
      WHERE match.user2_id=${userId})
  )
  AND NOT id=${userId};
  `;
};

export const insertIntoMatchHelper = (user1_id, user2_id) => {
  return `
  INSERT INTO match (user1_id, user2_id) 
  VALUES(${user1_id}, ${user2_id});
  `
};