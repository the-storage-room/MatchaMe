export const fetchAllTagsHelper = () => {
  return `
  SELECT * FROM tags
  `;
}

export const fetchUserAndTheirPreferenceTagsHelper = () => {
  return `
  SELECT username, firstname, lastname, tag, type FROM users_tags
  INNER JOIN users ON users_tags.userid = users.id
  INNER JOIN tags ON users_tags.tagid = tags.id
  WHERE users.id = $1
  `;
} 

export const deleteUserTagsHelper = () => {
  return [
  `DELETE FROM users_tags USING tags WHERE userid=$1 
   AND type=$2 RETURNING *;`
];
}

export const postUserAndPreferenceTagsHelper = () => {
  return [
  `INSERT INTO users_tags (userid, tagid, type)
   VALUES ($1, (SELECT id FROM tags WHERE tag=$2), $3);`
  ];
}
