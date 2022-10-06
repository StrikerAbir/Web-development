import React from "react";
import { NavLink,Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        {/* <Link to="/home">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/products">Products</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/posts">Post</Link> */}
        {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
        <NavLink className={({isActive})=> isActive?'active':undefined} to="/home">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/posts">Post</NavLink>
      </nav>
      <p>beka dat bane</p>
    </div>
  );
};

export default Header;
