import React from 'react';
import './FileInput.css';

function FileInput({onChange}) {
  return (
    <input type="file" className="fileInput" onChange={onChange}/>
  );
}

export default FileInput;
