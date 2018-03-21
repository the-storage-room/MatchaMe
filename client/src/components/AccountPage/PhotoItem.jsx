import React from 'react';

import style from './AccountPage.css';

const PhotoItem = ({ photo, onClick }) => {
  return (
    <div
      className={style.smallImageBox}
      onClick={onClick}
      >
      <img 
        className={style.smallImage}
        src={photo.url}
        />
    </div>
  );
};

export default PhotoItem;
