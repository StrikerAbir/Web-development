import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = user => {
        const agree =window.confirm(`Are you sure you want to delete: ${user.name}`)
        if (agree) {
            fetch(`http://localhost:1000/user/${user._id}`, {
              method: "DELETE",
            })
              .then((response) => response.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('user deleted successfully');
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id)
                        setDisplayUsers(remainingUsers);
                    }
                    console.log(data)
                });
        }
    }

    return (
      <div>
        <div>
          <Link to="/">Home</Link>
         <br /> <Link to="/user/add">Add user</Link>
        </div>
        <h2>USers : {displayUsers.length}</h2>
        <div>
          {displayUsers.map((user) => (
            <p key={user._id}>
              {user.name} {user.email} <button onClick={()=>handleDelete(user)}>X</button>
            </p>
          ))}
        </div>
      </div>
    );
};

export default Home;