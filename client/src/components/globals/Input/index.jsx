import React from 'react';

import style from './Input.css';

const Input = ({ type, name, onChange, placeholder, maxLength}) => {
  return (
    <input 
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

export default Input;