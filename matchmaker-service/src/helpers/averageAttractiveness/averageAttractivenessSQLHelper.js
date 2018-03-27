export const findAvgAttractivenessHelper = (usersRating) => {
  return `
  SELECT * FROM users
  WHERE averageattractiveness = ${usersRating}+3 OR averageattractiveness = ${usersRating}-3
  `;
}