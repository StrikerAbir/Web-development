import React, { useReducer } from "react";
import { initialState, reducer } from "../state/formReducer";

const Form = () => {
   
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(state);
    }
  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                />

                <label className="label cursor-pointer">
                  <span className="label-text">Blue pill</span>
                  <input
                    type="radio"
                    name="radio"
                    value="blue Pill"
                    className="radio checked:bg-blue-500"
                    onClick={(e) =>
                      dispatch({
                        type: "INPUT",
                        payload: { name: e.target.name, value: e.target.value },
                      })
                    }
                  />
                </label>

                <label className="label cursor-pointer">
                  <span className="label-text">TERM</span>
                  <input name="term" type="checkbox" className="checkbox" onClick={() => dispatch({type:"TOGGLE"})} />
                </label>
              </div>
              <div className="form-control mt-6">
                              <button disabled={!state.term} onClick={handleSubmit} className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
