import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard';

function ProductOverview() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(()=> {
    async function fetchFeaturedProducts() {
      try {
        const {data} = await axios.get('http://localhost:8080/products');
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


export default ProductOverview;
