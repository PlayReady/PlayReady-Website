import React from 'react';
import './Table.css';

function TableHeader({children}) {
  return (
    <thead>
      {children}
    </thead>
  );
}

export default TableHeader;
