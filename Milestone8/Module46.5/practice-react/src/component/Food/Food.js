import React from 'react';
import Increase from '../Increase/Increase';

const Food = (props) => {
    const { strMealThumb, strMeal, strCategory } = props.singleFood;
    console.log(props.strMealThumb);
    return (
      <div className="col">
        <div className="card border border-2 border-dark">
          <img src={strMealThumb} alt="" />
          <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">Category: {strCategory}</p>

            <Increase></Increase>
          </div>
        </div>
      </div>
    );
};

export default Food;