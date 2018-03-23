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

export const updateUsersTags = () => {
  return `
  
  `;
}

export const deleteUserTags = () => {
  return `
  
  `;
}

export const updateUserPreferenceTags = () => {
  return `
  
  `;
}

export const deleteUserPreferenceTags = () => {
  return `
  
  `;
}