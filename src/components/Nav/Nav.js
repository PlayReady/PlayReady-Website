import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

function Nav({alignRight, options}) {
  return (
    <nav className={alignRight ? 'right-Nav' : 'left-Nav'}>
      {options && options.map((option) => {
        return (
          <NavLink key={option} className="Navlink" to={option.path}>
            {option.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Nav;
