export const fetchAllPhotosHelper = () => {
  return `
  SELECT id, url FROM Photo
  WHERE userid=$1
  ORDER BY primaryphoto DESC;
  `;
};

export const fetchPrimaryPhotoHelper = userId => {
  return `
  SELECT id, url FROM Photo
  WHERE userid=${userId}
  AND primaryphoto=1;
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

export const updatePrimaryPhotoHelper = ({ userId, photoId }) => {
  return [
    `UPDATE photo SET primaryphoto=0 WHERE userid=${userId} AND primaryphoto=1 RETURNING *;`,
    `UPDATE photo SET primaryphoto=1 WHERE userid=${userId} AND id=${photoId} RETURNING *;`
  ];
};
