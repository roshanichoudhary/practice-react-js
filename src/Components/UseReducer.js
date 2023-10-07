import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Reducer</div>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducer;
