import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,  name, price,  ratings, ratingsCount, seller, } = props.product;

    const handleAddToCart = props.handleAddToCart;
   
    // console.log(props)
    return (
        <div className='sh-product'>
            <img className='sh-img' src={img} alt="" />
            <div className='sh-product-info'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Star</p>
            </div>
            <button className='sh-cart-btn' onClick={ () => handleAddToCart(props.product)}>Add To Cart</button>
        </div>
    );
};

export default Product;