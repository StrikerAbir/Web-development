import React, { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('diamond ring');
export const MoneyContext=createContext(100)

const Grandpa = () => {
  // const house = 7;
  const [house, setHouse] = useState(1);
  // const ring = 'gold ring';
  const [money, setMoney] = useState(100);
    return (
      // <RingContext.Provider value={'dadir ring'}>
      <RingContext.Provider value={[house, setHouse]}>
        <MoneyContext.Provider value={money}>
          <div className="grandpa">
            <h2>GrandPa</h2>
            <section className="flex">
              <Father house={house}></Father>
              <Aunt house={house}></Aunt>
              <Uncle house={house}></Uncle>
            </section>
          </div>
        </MoneyContext.Provider>
      </RingContext.Provider>
    );
};

export default Grandpa;