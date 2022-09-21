import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to my react website</h2>
            <nav className='menu'>
                <a href="/home">HOME</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;