import React, {useState} from 'react';
import logosvg from '../../assets/logo white.svg';
import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
  const [auth, setAuth]=useState();

  const leftOptions = [
    {name: 'Home', path: '/'},
    {name: 'Products', path: '/products'},
  ];
  const rightOptionsAuth = [
    {name: 'profile', path: '/profile'},
  ];
  const rightOptions = [
    {name: 'Log in', path: '/login'},
    {name: 'Registreer', path: '/register'},
  ];
  return (
    <div className="Header">
      <div className="nav">
        <Nav options={leftOptions}/>
      </div>
      <div className="logo">
        <img src={logosvg} alt="logo" height={50}/>
      </div>
      <div className="nav">
        <Nav alignRight options={auth? rightOptionsAuth: rightOptions}/>
      </div>

    </div>
  );
}

export default Header;
