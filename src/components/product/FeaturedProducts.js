import React, {useEffect, useState} from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import axios from 'axios';
import Loader from '../loader/Loader';

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(()=> {
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
    fetchFeaturedProducts();
  }, [],
  );


  return (
    <div className="productFeature">
      {isLoading && <Loader/>}
      {featuredProducts.map((product) => {
        return <ProductCard key={product} product={product}/>;
      })}
    </div>
  );
}

export default FeaturedProducts;
