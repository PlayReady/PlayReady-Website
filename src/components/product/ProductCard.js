import React from 'react';
import './Product.css';
import Button from '../button/Button';
import {useNavigate} from 'react-router-dom';

function ProductCard({product}) {
  const navigation=useNavigate();
  function handleClick() {
    navigation('/products/'+product.id);
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
        <Button onclick={handleClick}>Read more</Button>
      </div>
    </div>
  );
}

export default ProductCard;
