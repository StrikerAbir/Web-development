import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

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
        <div style={{ border:'2px solid purple', margin:'20px'}}>
            <h1>New Watches</h1>
            <h3>My current steps :{steps}</h3>
            <button onClick={increase}>Step</button>
            <Display name='bane' steps={steps}></Display>
        </div>
    );
};

export default Watch;