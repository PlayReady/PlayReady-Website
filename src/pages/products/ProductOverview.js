import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/loader/Loader';
import './ProductOverview.css';
import {AuthContext} from '../../context/AuthContext';

function ProductOverview() {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] =useState(false);
  const [error, setError] = useState(null);
  const [requestedProductIds, setRequestedProductIds] = useState([]);
  const {getUser, isAuth} = useContext(AuthContext);

  async function fetchProducts() {
    try {
      const {data} = await axios.get('http://localhost:8080/products');
      setProducts(data);
    } catch (e) {
      setError(e);
      console.log(e);
    }
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
    setIsLoading(true);
    fetchProducts();
    if (isAuth) {
      requestProduct();
    }
    setIsLoading(false);
  }, [isAuth],
  );


  return (
    < div className="productOverview">
      {isLoading && <Loader/>}
      {error && <p>{error.message}</p>}
      {Products.map((product) => {
        return <ProductCard
          key={product.id}
          product={product}
          requested={checkIsRequested(product.id)}
        />;
      })}


    </div>


  );
}


export default ProductOverview;
