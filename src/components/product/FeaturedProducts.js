import React, {useEffect, useState} from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import productImage from '../../assets/placeholders/computers/product.png';
import axios from 'axios';

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] =useState([]);

  async function fetchFeaturedProducts() {
    try {
      const {data} = await axios.get('localhost:8080/products/featured');
      setFeaturedProducts(data);
    } catch (e) {
      console.log(e);
    }
  }
  fetchFeaturedProducts();


  return (
    <div className="productFeature">
      {featuredProducts.map((product) => {
        return <ProductCard key={product} product={product}/>;
      })}
    </div>
  );
}

export default FeaturedProducts;
