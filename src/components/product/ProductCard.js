import React, {useContext, useState} from 'react';
import './Product.css';
import Button from '../button/Button';
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';

function ProductCard({product, requested}) {
  const [Loading, setLoading] = useState(false);
  const {getUser}=useContext(AuthContext);

  async function requestProduct() {
    try {
      const {} =await axios.post(
          'http://localhost:8080/users/'+getUser()+'/requestedProducts',
          {
            'id': product.id,
          },
      );
    } catch (e) {

    }
  }
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
          confirmed={requested}
        >
            Vraag aan
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
