import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h1>Home for { user?.displayName}</h1>
        </div>
    );
};

export default Home;