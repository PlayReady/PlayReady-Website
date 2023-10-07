import React from 'react';
import './TextInput.css';

function TextInput({name, placeholder, value, onchange}) {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
    />
  );
}

export default TextInput;
