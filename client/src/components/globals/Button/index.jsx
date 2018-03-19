import React from 'react';

import style from './Button.css';

const Button = ({ onClick, text, className }) => {
  className = className || style.defaultButton;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
