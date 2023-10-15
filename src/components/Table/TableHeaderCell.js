import React from 'react';
import './Table.css';

function TableHeaderCell({children}) {
  return (
    <th>
      {children}
    </th>
  );
}

export default TableHeaderCell;
