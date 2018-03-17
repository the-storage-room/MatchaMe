import React from 'react';

import style from './Input.css';

const Input = ({ type, name, onChange, placeholder }) => {
  return (
    <input 
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;