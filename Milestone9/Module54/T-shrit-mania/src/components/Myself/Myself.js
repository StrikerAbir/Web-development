import React from 'react';
import Tishu from '../Tishu/Tishu';

const Myself = ({house,ring}) => {
    return (
      <div>
        <h2>Myself</h2>
        <p>
          <small>House: {house}</small>
        </p>
        <section>
          <Tishu></Tishu>
        </section>
      </div>
    );
};

export default Myself;