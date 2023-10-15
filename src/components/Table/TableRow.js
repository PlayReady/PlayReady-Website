import React from 'react';
import './Table.css';
function TableRow({children}) {
  return (
    <tr>
      {children}
    </tr>
  );
}

export default TableRow;
