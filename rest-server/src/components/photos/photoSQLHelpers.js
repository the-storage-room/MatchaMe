export const fetchAllPhotosHelper = userId => {
  return `
  SELECT url FROM Photo
  WHERE userid=${userId}
  ORDER BY primaryphoto DESC;
  `;
};

export const fetchPrimaryPhotoHelper = () => {
  return `
  
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
