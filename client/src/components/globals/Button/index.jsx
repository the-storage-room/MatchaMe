import React from 'react';

import style from './Button.css';

const Button = ({ onClick, text, className}) => {
  className = className || 'defaultButton';

  return (
    <button 
      className={style[className]}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
