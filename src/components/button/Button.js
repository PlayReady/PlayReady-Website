import React from 'react';
import './Button.css';
import Loader from '../loader/Loader';

function Button({children, onclick, loading, disabled, type}) {
  function handleClick() {
    if (!disabled && onclick) {
      onclick();
    }
  }
  return (
    <button
      onClick={handleClick}
      type={type}
      className={disabled && 'disabled'}
    >
      {loading && <div className={`overlay`}><Loader/></div>}
      <div className={loading && 'loading'}>{children}</div>
    </button>
  );
}

export default Button;
