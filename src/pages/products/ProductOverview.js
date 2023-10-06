import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/loader/Loader';
import './ProductOverview.css';

function ProductOverview() {
  const [Products, setProducts] = useState([]);
  const [isLoading, setIsLoading] =useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const {data} = await axios.get('http://localhost:8080/products');
        setProducts(data);
      } catch (e) {
        setError(e);
        console.log(e);
      }
      setIsLoading(false);
    }
    fetchProducts();
  }, [],
  );


  return (
    < div className="productOverview">
      {isLoading && <Loader/>}
      {error && <p>{error}</p>}
      {Products.map((product) => {
        return <ProductCard key={product} product={product}/>;
      })}


    </div>


  );
}


export default ProductOverview;
