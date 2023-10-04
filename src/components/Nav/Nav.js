import React from 'react';
import {NavLink} from "react-router-dom";
import "./Nav.css"

function Nav({alignRight, options}) {


    return (
        <nav className={alignRight ? "right-Nav" : "left-Nav"}>
            {options && options.map((option) => {
                return (
                    < NavLink className="Navlink" to={option.path}>
                        <h2>{option.name}</h2>
                    </NavLink>
                )
            })}
        </nav>
    );
}

export default Nav;