export const fetchAllTagsHelper = () => {
  return `
  SELECT * FROM tags
  `;
};

export const fetchUserAndTheirPreferenceTagsHelper = () => {
  return `
  SELECT tags.id, tags.tag FROM users_tags
  INNER JOIN tags ON tags.id=users_tags.tagid
  WHERE users_tags.userid=$1 AND users_tags.type=$2;
  `;
};

export const deleteUserTagsHelper = () => {
  return `
   DELETE FROM users_tags USING tags WHERE userid=$1 
   AND type=$2 RETURNING *
   `;
};

export const postUserAndPreferenceTagsHelper = () => {
  return `
  INSERT INTO users_tags (userid, tagid, type)
  VALUES ($1, (SELECT id FROM tags WHERE tag=$2), $3)
  `;
};
