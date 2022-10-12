import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const Main = () => {
    return (
        <div className="bg-green-300">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;