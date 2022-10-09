import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({house}) => {
    return (
      <div>
        <h1>Uncle</h1>
        <section className="flex">
          <p>
            <small>House: {house}</small>
          </p>
        </section>
      </div>
    );
};

export default Uncle;