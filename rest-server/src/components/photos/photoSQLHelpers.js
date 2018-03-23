export const fetchAllPhotosHelper = () => {
  return `
  SELECT id, url FROM Photo
  WHERE userid=$1
  ORDER BY primaryphoto DESC;
  `;
};

export const fetchPrimaryPhotoHelper = () => {
  return `
  SELECT id, url FROM Photo
  WHERE userid=$1
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

export const updatePrimaryPhotoHelper = () => {
  return [
    `UPDATE photo SET primaryphoto=0 WHERE userid=$1 AND primaryphoto=1 RETURNING *;`,
    `UPDATE photo SET primaryphoto=1 WHERE userid=$1 AND id=$2 RETURNING *;`
  ];
};
