import React from 'react';
import "./Product.css";
import ProductCard from "./ProductCard";
import productImage from "../../assets/placeholders/computers/product.png"

function FeaturedProducts() {

    const featuredProducts=[
        {
            image:productImage,
            name:"Game pc",
            price:30,
        },
        {
            image:productImage,
            name:"Game pc",
            price:30,
        },
        {
            image:productImage,
            name:"Game pc",
            price:30,
        },
    ]
    return (
        <div className="productFeature">
            {featuredProducts.map((product)=>{
                return <ProductCard product={product}/>
            })}
        </div>
    );
}

export default FeaturedProducts;