import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/products'>Products</Link>
            {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
        </div>
    );
};

export default Header;