import React from 'react';

import style from './AccountPage.css';

const TargetPhoto = ({ photo }) => {
  return (
    <div className={style.targetBox}>
      <img 
        className={style.target}
        src={photo.url}
        />
    </div>
  );
};

export default TargetPhoto;
