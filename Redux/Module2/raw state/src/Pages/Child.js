import React, { useContext } from 'react';
import { ContextProv } from '../App';

const Child = () => {
    const { num,setNum } = useContext(ContextProv);
    return (
      <div>
        <h1>
          Child <span>{num}</span>
        </h1>
        <button
          onClick={()=>setNum(num + 1)}
          className="border-2 p-3 bg-slate-200 mx-3"
        >
          increase
        </button>
        <button onClick={()=>setNum((prvState)=>prvState-1)} className="border-2 p-3 bg-slate-200">
          decrease
        </button>
      </div>
    );
};

export default Child;