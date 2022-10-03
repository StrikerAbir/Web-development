import React from 'react';
import './BreakTime.css'
const BreakTime = ({ handleBreakTime, minutes }) => {
    const { min } = minutes;
    return (
      <div>
        <button onClick={()=>handleBreakTime(min)}>
                {min}<small>min</small>
        </button>
      </div>
    );
};

export default BreakTime;