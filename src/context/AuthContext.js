import React, {createContext, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
  const navigator =useNavigate();
  const [isAuth, setAuth] = useState(false);

  async function login(username, password) {
    try {
      const {data} = await axios.post(
          'http://localhost:8080/auth',
          {
            'username': username,
            'password': password,
          });
      localStorage.setItem('token', data);
      setAuth(true);
    } catch (e) {
      console.log(e);
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
