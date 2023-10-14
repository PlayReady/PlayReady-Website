import React, {useContext, useEffect, useState} from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import axios from 'axios';
import Loader from '../loader/Loader';
import {AuthContext} from '../../context/AuthContext';

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [requestedProductIds, setRequestedProductIds] = useState([]);
  const {getUser, isAuth} = useContext(AuthContext);

  async function fetchFeaturedProducts() {
    setLoading(true);
    try {
      const {data} = await axios.get('http://localhost:8080/products/featured');
      setFeaturedProducts(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  async function requestProduct() {
    try {
      const {data} =await axios.get(
          'http://localhost:8080/users/'+getUser()+'/requestedProducts',
      );
      setRequestedProductIds(data);
      console.log(data);
    } catch (e) {

    }
  }

  function checkIsRequested(id) {
    return requestedProductIds.some((product) => product.id === id);
  }

  useEffect(()=> {
    fetchFeaturedProducts();
    if (isAuth) {
      requestProduct();
    }
  }, [],
  );


  return (
    <div className="productFeature">
      {isLoading && <Loader/>}
      {featuredProducts.map((product) => {
        return <ProductCard
          key={product}
          product={product}
          requested={checkIsRequested(product.id)}
        />;
      })}
    </div>
  );
}

export default FeaturedProducts;
