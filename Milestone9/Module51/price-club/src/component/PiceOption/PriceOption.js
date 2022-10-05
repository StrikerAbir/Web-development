import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    return (
      <div className="bg-indigo-300 rounded-md p-3 m-3 -">
        <div>
          <h3>
            <span className="text-6xl font-bold text-white ">
              {option.price}
            </span>
            <span className="text-2xl text-gray-200">/mon</span>
          </h3>
          <p className="text-3xl my-4">{option.name}</p>
        </div>
        {option.feature.map((fe,index) => (
          <Feature key={index} feature={fe}></Feature>
        ))}
        <button className='bg-black text-white w-full rounded-md py-2 font-bold mt-2'>Buy Now</button>
      </div>
    );
};

export default PriceOption;