import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-warning'>
            <h2>Welcome to my react website</h2>
            <nav className='menu'>
                <a className='btn btn-primary' href="/home">HOME</a>
                <a className='btn btn-primary' href="/shop">Shop</a>
                <a className='btn btn-primary' href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;