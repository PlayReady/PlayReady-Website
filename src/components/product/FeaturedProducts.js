import React, {useEffect, useState} from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import axios from 'axios';

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(()=> {
    async function fetchFeaturedProducts() {
      try {
        const {data} = await axios.get('http://localhost:8080/products/featured');
        setFeaturedProducts(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchFeaturedProducts();
  }, [],
  );


  return (
    <div className="productFeature">
      {featuredProducts.map((product) => {
        return <ProductCard key={product} product={product}/>;
      })}
    </div>
  );
}

export default FeaturedProducts;
