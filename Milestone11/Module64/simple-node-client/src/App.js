import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch("http://localhost:1000/users", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((data) => {
        const newUser = [...users, data];
        setUsers(newUser);
      })
      .catch(err => console.error(err));

    form.reset();
  };
  return (
    <div className="App">
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <button type="submit">Add user</button>
      </form>
      <h2>user {users.length}</h2>
      <div>
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
