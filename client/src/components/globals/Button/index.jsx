import React from 'react';

import style from './Button.css';

const Button = ({ onClick }) => {
  return (
    <div>
      <button 
        onClick={onClick}
      >click me
      </button>
    </div>
  );
}

export default Button;