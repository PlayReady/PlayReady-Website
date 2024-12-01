import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
  const navigator = useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      const decodedToken = jwtDecode(localStorage.getItem('token'));
      if (decodedToken.exp < Date.now()) {
        setAuth(true);
      }
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
      navigator('/profile');
    } catch (e) {
      console.log(e);
      toast(e);
    }
  }

  async function getUserInfo() {
    const token =getToken();
    const user = getUser();
    try {
      const {data} =await axios.get(
          'http://localhost:8080/users/'+user,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
      );
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    localStorage.clear();
    setAuth(false);
    navigator('/');
  }

  function getToken() {
    if (isAuth) {
      return localStorage.getItem('token');
    } else {
      navigator('/login');
    }
  }

  function getUser() {
    return jwtDecode(getToken()).sub;
  }

  const contextData = {
    isAuth,
    login,
    logout,
    getToken,
    getUser,
    getUserInfo,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
