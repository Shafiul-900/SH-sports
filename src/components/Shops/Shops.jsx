import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shops.css"


const Shops = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    // useEffect(() => {
    //     const storesCart = getShoppingCart();
    //     const saveCart = [];
    //     for(const id in storesCart){
    //         const addedProduct = product.find(product => product.id === id)
    //         if(addedProduct){
    //             const quantity = storesCart[id]
    //             addedProduct.quantity = quantity;
    //         }
    //         console.log(id);
    //     }
    // },[product])

    const handleAddToCart = (product) => {
       const newCart = product;
       setCart(newCart);
    }
    // console.log(cart)
    return (
        <div className='sh-shop-container'>
           <div className='sh-shop-list'>
                {
                    product.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
           </div>
           <div className='sh-shop-cart'>
                <Cart
                    cart={cart}
                ></Cart>
           </div>
        </div>
    );
};

export default Shops;