import React from "react";
import "./Card.css";
const Card = ({ sport,clickHandler }) => {
  const { strSport, strFormat, strSportThumb, strSportDescription, time } =
    sport;
  return (
    <div className="card-container">
      <img src={strSportThumb} alt="" />
      <div className='info'>
        <div className="align">
          <h3>{strSport}</h3>
          <p>Full Time : {time}hr</p>
        </div>
        <p className="format">
          <small>Format : {strFormat}</small>
        </p>
        <p>{strSportDescription}</p>
        <button className="btn" onClick={()=>clickHandler(sport)}>
          <p>Add To List</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
