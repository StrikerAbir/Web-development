import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones= useLoaderData();
    return (
      <div>
        <h2>Show me all phones</h2>
        <p>Phones {phones.length}</p>
        {phones.map((ph) => (
          <li>
            <Link to={`/phones/${ph.id}`}>{ph.name}</Link>
          </li>
        ))}
      </div>
    );
};

export default Home;