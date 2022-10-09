import React, { createContext } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const RingContext= createContext('diamond ring')

const Grandpa = () => {
  const house = 7;
  const ring = 'gold ring';
    return (
      <div className="grandpa">
        <h2>GrandPa</h2>
        <section className="flex">
          <Father house={house} ring={ring}></Father>
          <Aunt house={house}></Aunt>
          <Uncle house={house}></Uncle>
        </section>
      </div>
    );
};

export default Grandpa;