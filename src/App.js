import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ProductOverview from './pages/products/ProductOverview';


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
      </Routes>
    </>
  );
}

export default App;
