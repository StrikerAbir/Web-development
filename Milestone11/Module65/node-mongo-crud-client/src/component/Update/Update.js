import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();

    const [user, setUser] = useState(storedUser);
    const handleUpdateUser = (event) => {
      event.preventDefault();
        console.log(user);
        fetch(`http://localhost:1000/user/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('User Update')
                }
                console.log(data)
            });
      
    };
    const handleInputChange = (event) => {
      const field = event.target.name;
      const value = event.target.value;
      const newUser = { ...user };
      newUser[field] = value;
      setUser(newUser);
    };
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <br /> <Link to="/user/add">Add user</Link>
        </div>
        <h2>please update : {storedUser.name}</h2>
        <form onSubmit={handleUpdateUser}>
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
            placeholder="name"
            defaultValue={storedUser.name}
            required
          />
          <br />
          <input
            onChange={handleInputChange}
            type="text"
            name="address"
            placeholder="address"
            defaultValue={storedUser.address}
            required
          />
          <br />
          <input
            onChange={handleInputChange}
            type="email"
            name="email"
            placeholder="email"
            defaultValue={storedUser.email}
            required
          />
          <br />
          <button type="submit">update</button>
        </form>
      </div>
    );
};

export default Update;