import { actionTypes } from "./actionTypes";

export const initialState = {
  email: "",
  password: "",
  radio: "",
  term: false,
};
export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };

    default:
      return state;
  }
};
