import React from 'react';
import logosvg from "../../assets/logo white.svg"
import "./Header.css"
import Nav from "../Nav/Nav";

function Header(props) {
    return (
        <div className="Header">
            <nav className="left-nav">
                <Nav/>
            </nav>
            <div className="logo">
                <img src={logosvg} alt="logo"/>
            </div>
            <nav className="right-nav">
                <Nav/>
            </nav>

        </div>
    );
}

export default Header;