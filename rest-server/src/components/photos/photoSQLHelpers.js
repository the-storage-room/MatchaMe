export const fetchAllPhotosHelper = userId => {
  return `
  SELECT id, url FROM Photo
  WHERE userid=${userId}
  ORDER BY primaryphoto DESC;
  `;
};

export const fetchPrimaryPhotoHelper = (userId) => {
  return `
  SELECT photo.url FROM photo
  INNER JOIN users ON users.id = photo.userid
  WHERE primaryphoto=1 AND users.id='${userId}'
  `;
};

export const addPhotoHelper = () => {
  return `
  
  `;
};

export const deletePhotoHelper = () => {
  return `
  
  `;
};

export const updatePrimaryPhotoHelper = () => {
  return `
  
  `;
};
