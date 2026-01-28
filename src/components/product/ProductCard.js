import React, {useContext, useEffect, useState} from 'react';
import './Product.css';
import Button from '../button/Button';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';

function ProductCard({product, requested}) {
  const [Loading, setLoading] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const {getUser}=useContext(AuthContext);

  async function requestProduct() {
    try {
      await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/users/${getUser()}/requestedProducts`,
          {id: product.id},
      );
      setIsRequested(true);
    } catch (e) {
      console.error('Request failed:', e);
    }
  }

  useEffect(() => {
    setIsRequested(requested);
  });

  function handleClick() {
    setLoading(true);
    requestProduct();
    setLoading(false);
  }
  return (
    <div className="productCard">
      <img
        src={`data:image/png;base64,${product.image}`}
        alt="product"
        className="productImage"
      />
      <div className="productCardContent">
        <h1>{product.name}</h1>
        <p>€{product.price},- per maand</p>
        <Button
          onclick={handleClick}
          loading={Loading}
          confirmed={isRequested}
        >
            Vraag aan
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
