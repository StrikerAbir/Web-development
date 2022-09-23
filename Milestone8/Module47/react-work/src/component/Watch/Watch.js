import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0)
    const increase = () => {
        const newStepCount = steps + 1;
        setSteps(newStepCount); 
    }
    useEffect(() => {
      console.log(steps);
    }, [steps]);
    return (
        <div>
            <h1>New Watches</h1>
            <h3>My current steps :{steps}</h3>
            <button onClick={increase}>Step</button>
        </div>
    );
};

export default Watch;