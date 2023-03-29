import React from 'react';
import logo from './PlayStation.svg';
import "./Header.css"
const Header = () => {
    return (
        <nav className='header'>
            <img className='sh-logo' src={logo} alt="" />
            <div>
                <a href="">Menu</a>
                <a href="">Shop</a>
                <a href="">Account</a>
                <a href="">Login</a>
            </div>
        </nav>
    );
};

export default Header;