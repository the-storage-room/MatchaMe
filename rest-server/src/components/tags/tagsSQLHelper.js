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
   AND tagid=$2 AND type=$3 RETURNING *;`, 
  `DELETE FROM users_tags USING tags WHERE userid=$1 
  AND tagid=$2 AND type=$3 RETURNING *;`
];
}

export const postUserAndPreferenceTagsHelper = () => {
  return [
  `INSERT INTO users_tags(tagid, userid, type) values($1, $2, $3);`,
  `INSERT INTO users_tags(tagid, userid, type) values($1, $2, $3); `
  ];
}
