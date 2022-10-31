import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();

    const handleDelete = user => {
        const agree =window.confirm(`Are you sure you want to delete: ${user.name}`)
        if (agree) {
            
            console.log('deleting usr with', user._id);
        }
    }

    return (
      <div>
        <div>
          <Link to="/">Home</Link>
         <br /> <Link to="/user/add">Add user</Link>
        </div>
        <h2>USers : {users.length}</h2>
        <div>
          {users.map((user) => (
            <p key={user._id}>
              {user.name} {user.email} <button onClick={()=>handleDelete(user)}>X</button>
            </p>
          ))}
        </div>
      </div>
    );
};

export default Home;