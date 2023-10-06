import React, {useState} from 'react';
import './Product.css';
import Button from '../button/Button';
import {useNavigate} from 'react-router-dom';

function ProductCard({product}) {
  const navigation=useNavigate();
  const [Loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
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
        <Button onclick={handleClick} loading={Loading}>Lees meer</Button>
      </div>
    </div>
  );
}

export default ProductCard;
