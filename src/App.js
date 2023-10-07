import './App.css';
import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ProductOverview from './pages/products/ProductOverview';
import Button from './components/button/Button';
import {AuthContext} from './context/AuthContext';

function App() {
  const {login} = useContext(AuthContext);

  function HandleClick() {
    login();
  }
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
      </Routes>
      <Button onclick={HandleClick}>login</Button>

    </>
  );
}

export default App;
