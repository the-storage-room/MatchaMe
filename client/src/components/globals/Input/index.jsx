import React from 'react';

import style from './Input.css';

const Input = ({ type, name, onChange, placeholder, maxLength, value}) => {
  return (
    <input 
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
    />
  );
};

export default Input;