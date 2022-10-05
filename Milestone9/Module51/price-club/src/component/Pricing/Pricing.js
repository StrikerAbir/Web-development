import React from 'react';
import PriceOption from '../PiceOption/PriceOption';

const Pricing = () => {
    const pricing = [
      {
        id: 1,
        name: "Free",
        price: 0,
        feature: [
          "Awesome Freature",
          "Extra feature",
          "Unnecessary Feature",
          "Will never use Feature",
          "Tishu Feature",
          "lovely Feature",
        ],
      },
      {
        id: 2,
        name: "Medium",
        price: 9.99,
        feature: [
          "Awesome Freature",
          "Extra feature",
          "Unnecessary Feature",
          "Will never use Feature",
          "Tishu Feature",
          "lovely Feature",
        ],
      },
      {
        id: 3,
        name: "Premium",
        price: 19.99,
        feature: [
          "Awesome Freature",
          "Extra feature",
          "Unnecessary Feature",
          "Will never use Feature",
          "Tishu Feature",
          "lovely Feature",
        ],
      },
    ];
    return (
      <div>
        <h2 className="text-5xl font-bold bg-indigo-300 p-12 text-white">
          Best deal of the town
        </h2>
        <div className='grid grid-cols-3 gap-3'>
          {pricing.map((option) => (
            <PriceOption key={option.id} option={option}></PriceOption>
          ))}
        </div>
      </div>
    );
};

export default Pricing;