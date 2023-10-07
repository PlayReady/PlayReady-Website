import React from 'react';
import './TextInput.css';

function TextInput({name, placeholder, value, onchange, password}) {
  return (
    <input
      type={password && 'password'}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
    />
  );
}

export default TextInput;
