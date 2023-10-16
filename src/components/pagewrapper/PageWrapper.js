import React from 'react';
import './PageWrapper.css';

function PageWrapper({children}) {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
}

export default PageWrapper;
