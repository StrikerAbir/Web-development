import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
const [user,setUser] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        fetch("http://localhost:1000/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user added successfully.')
                    event.target.reset();
                }
            });

    }
    const handleInputBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <br /> <Link to="/user/add">Add user</Link>
        </div>
        <h2>Please add new user</h2>
        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleInputBlur}
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <br />
          <input
            onBlur={handleInputBlur}
            type="text"
            name="address"
            placeholder="address"
            required
          />
          <br />
          <input
            onBlur={handleInputBlur}
            type="email"
            name="email"
            placeholder="email"
            required
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
};

export default AddUser;