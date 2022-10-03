import React from 'react';
import logo from '../../images/sports.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>Sports Time</h1>
        </div>
    );
};

export default Header;