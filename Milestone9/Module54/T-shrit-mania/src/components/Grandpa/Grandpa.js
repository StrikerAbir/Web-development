import React from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    const house = 7;
    return (
      <div className="grandpa">
        <h2>GrandPa</h2>
        <section className="flex">
          <Father house={house}></Father>
          <Aunt house={house}></Aunt>
          <Uncle house={house}></Uncle>
        </section>
      </div>
    );
};

export default Grandpa;