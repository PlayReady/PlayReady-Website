import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ProductOverview from './pages/products/ProductOverview';
import Login from './pages/login/Login';
import Logout from './pages/Logout/Logout';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/products"
          element={<ProductOverview/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/logout"
          element={<Logout/>}
        />
      </Routes>
    </>
  );
}

export default App;
