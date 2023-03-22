
import { useReducer } from 'react';
import './App.css';


function App() {
  const initialState = 0;
  const reducer = (state,action) => {
    if (action.type === "INCREMENT") {
      // return state + 1;
      return state + action.payload.count;
    } else if (action.type === "DECREMENT") {
      // return state - 1;
      return state - action.payload.count;
    }
  }
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <div>
        <p>{state}</p>
        <button
          onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}
        >
          {" "}
          decrement
        </button>
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
          className="ml-4"
        >
          {" "}
          increment
        </button>
      </div>
    </div>
  );
}

export default App;
