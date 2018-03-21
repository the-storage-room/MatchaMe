import React from 'react';

import style from './AccountPage.css';

const PhotoItem = ({ photo }) => {
  return (
    <div className={style.smallImageBox}>
      <img 
        className={style.smallImage}
        src={photo}
        />
    </div>
  );
};

export default PhotoItem;
