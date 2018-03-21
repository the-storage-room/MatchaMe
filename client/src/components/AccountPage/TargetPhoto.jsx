import React from 'react';

import style from './AccountPage.css';

const TargetPhoto = ({ photo }) => {
  return (
    <div className={style.targetBox}>
      <img 
        className={style.target}
        src={photo}
        />
    </div>
  );
};

export default TargetPhoto;
