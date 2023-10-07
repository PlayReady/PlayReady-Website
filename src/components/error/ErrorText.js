import React from 'react';
import './ErrorText.css';

function ErrorText({children}) {
  return (
    <p className='errorText'>{children}</p>
  );
}

export default ErrorText;
