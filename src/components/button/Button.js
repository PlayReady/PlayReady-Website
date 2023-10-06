import React from 'react';
import './Button.css';

function Button({children, onclick}) {
  function handleClick() {
    onclick();
  }
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
