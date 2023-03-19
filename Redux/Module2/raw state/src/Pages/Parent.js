import React, { useContext } from 'react';
import { ContextProv } from '../App';
import Child from './Child';

const Parent = () => {
    const {num}=useContext(ContextProv)
    return (
        <div>
            <h1>Parent <span>{ num}</span></h1>
            <Child></Child>
        </div>
    );
};

export default Parent;