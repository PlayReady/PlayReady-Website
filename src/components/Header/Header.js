import React from 'react';
import logosvg from "../../assets/logo white.svg"
import "./Header.css"
import Nav from "../Nav/Nav";

function Header() {
    const leftOptions = [
        {
            name:"home",
            path:"/"
        }
    ]
    const rightOptions = [
        {
            name:"profile",
            path:"/profile"
        }
    ]
    return (
        <div className="Header">
            <div className="nav">
                <Nav options={leftOptions}/>
            </div>
            <div className="logo">
                <img src={logosvg} alt="logo"/>
            </div>
            <div className="nav">
                <Nav alignRight options={rightOptions}/>
            </div>

        </div>
    );
}

export default Header;