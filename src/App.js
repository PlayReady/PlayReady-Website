import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import ProductOverview from './pages/products/ProductOverview';
import Login from './pages/login/Login';
import Logout from './pages/Logout/Logout';
import Registration from './pages/registration/Registration';
import ProfilePage from './pages/profile/ProfilePage';
import PageWrapper from './components/pagewrapper/PageWrapper';


function App() {
  return (
    <>
      <Header/>
      <PageWrapper>
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
          <Route
            path="/register"
            element={<Registration/>}
          />
          <Route
            path="/profile"
            element={<ProfilePage/>}
          />
        </Routes>
      </PageWrapper>
    </>
  );
}

export default App;
