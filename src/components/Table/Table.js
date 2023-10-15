import React from 'react';
import './Table.css';
function Table({children}) {
  return (
    <table>
      {children}
    </table>
  );
}

export default Table;
