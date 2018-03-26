export const fetchUserAndTheirPreferenceTagsHelper = () => {
  return `
  SELECT tags.id, tags.tag FROM users_tags
  INNER JOIN tags ON tags.id=users_tags.tagid
  WHERE users_tags.userid=$1 AND users_tags.type=$2;
  `;
};

export const fetchAllUsersHelper = () => {
  return `
  SELECT id, age, location, gender, preference, averageattractiveness
  FROM users
  WHERE signupcomplete='true'
  `;
}