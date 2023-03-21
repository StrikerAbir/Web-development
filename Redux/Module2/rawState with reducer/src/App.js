
import { useReducer } from 'react';
import './App.css';


function App() {
  const initialState = 0;
  const reducer = (state,action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  }
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <div>
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          {" "}
          decrement
        </button>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
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
