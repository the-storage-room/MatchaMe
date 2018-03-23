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
  INSERT INTO photo (
    url, 
    userid,
    primaryphoto
  )
  VALUES (
    $1,
    $2,
    0
  )
  `;
};

export const deletePhotoHelper = () => {
  return `
  DELETE FROM photo
  WHERE id=$1;
  `;
};

export const updatePrimaryPhotoHelper = () => {
  return [
    `UPDATE photo SET primaryphoto=0 WHERE userid=$1 AND primaryphoto=1 RETURNING *;`,
    `UPDATE photo SET primaryphoto=1 WHERE userid=$1 AND id=$2 RETURNING *;`
  ];
};
