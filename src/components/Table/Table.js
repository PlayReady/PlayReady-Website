import React from 'react';
import './Table.css';
function Table({children, title}) {
  return (
    <>
      <h1 className="tabletitle">{title}</h1>
      <table>
        {children}
      </table>
    </>
  );
}

export default Table;
