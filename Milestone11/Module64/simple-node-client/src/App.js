import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/users")
      .then((response) => response.json())
      .then((data) => setData(data));
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
      .then((data) => setData(data))
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
      <h2>user {data.length}</h2>
      <div>
        {data.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
