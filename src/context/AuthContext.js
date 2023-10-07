import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
  const navigator =useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(()=>{
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    if (decodedToken.exp<Date.now()) {
      setAuth(true);
    }
  });

  async function login(credentials) {
    try {
      const {data} = await axios.post(
          'http://localhost:8080/auth',
          {
            'username': credentials.username,
            'password': credentials.password,
          });
      localStorage.setItem('token', data);
      setAuth(true);
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  function logout() {
    localStorage.clear();
    setAuth(false);
  }

  function getToken() {
    if (isAuth) {
      return localStorage.getItem('token');
    } else {
      navigator('/login');
    }
  }

  const contextData = {
    isAuth,
    login,
    logout,
    getToken,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
