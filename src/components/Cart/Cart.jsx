import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // const {img,  name, price,  ratings, ratingsCount, seller, } = props.cart;
    // const {category,quantity, ratingsCount,shipping,stock} = props.product;
    return (
        <div className='sh-cart-container'>
            <h3>Order Summary</h3>

            <div>
                <p>Selected Items: {}</p>
                <p>Total Price: $ {}</p>
                <p>Total Shipping Charge: $ {}</p>
                <p>Tax: $ {}</p>
                <p>Grand Total: $ {}</p>
            </div>
        </div>
    );
};

export default Cart;