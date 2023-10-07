import React from 'react';
import './TextInput.css';

function TextInput({placeholder, value, setvalue}) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e)=>setvalue(e.target.value)}
    />
  );
}

export default TextInput;
