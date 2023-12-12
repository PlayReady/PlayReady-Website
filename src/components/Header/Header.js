import React, {useContext, useEffect, useState} from 'react';
import logosvg from '../../assets/logo white.svg';
import './Header.css';
import Nav from '../Nav/Nav';
import {AuthContext} from '../../context/AuthContext';

function Header() {
  const {isAuth, getUserInfo}=useContext(AuthContext);
  const [roles, setRoles] = useState([]);

  async function fetchUserInfo() {
    try {
      const userInfo = await getUserInfo();
      setRoles(userInfo.roles);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{
    if (isAuth) {
      fetchUserInfo();
    }
  }, [isAuth]);
  const leftOptions = [
    {name: 'Home', path: '/'},
    {name: 'Products', path: '/products'},
  ];
  const rightOptions = [
    {name: 'Log in', path: '/login'},
    {name: 'Registreer', path: '/register'},
  ];
  const rightOptionsAuth = [
    {name: 'Profiel', path: '/profile'},
    {name: 'Log uit', path: '/logout'},
  ];
  if (isAuth && (roles.includes('ROLE_ADMIN'))) {
    rightOptionsAuth.unshift(
        {name: 'facturen', path: '/invoices'},
    );
  }

  return (
    <div className="Header">
      <div className="nav">
        <Nav options={leftOptions}/>
      </div>
      <div className="logo">
        <img src={logosvg} alt="logo" height={50}/>
      </div>
      <div className="nav">
        <Nav alignRight options={isAuth? rightOptionsAuth: rightOptions}/>
      </div>

    </div>
  );
}

export default Header;
