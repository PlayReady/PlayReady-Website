import React from 'react';
import "./Product.css";
import Button from "../button/Button";

function ProductCard({product}) {
    return (
        <div className="productCard">
            <img src={product.image} alt="product" className="productImage"/>
            <div className="productCardContent">
                <h1>{product.name}</h1>
                <p>€{product.price},- per maand</p>
                <Button>Read more</Button>
            </div>
        </div>
    );
}

export default ProductCard;