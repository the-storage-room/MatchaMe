import React from 'react';

import style from './Button.css';

const Button = ({ onClick, text, className }) => {
  className = className || 'defaultButton';

  return (
    <div>
      <div className={style[className]} onClick={onClick}>
        {text}
      </div>
    </div>
  );
};

export default Button;
