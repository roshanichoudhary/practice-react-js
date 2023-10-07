import React, { useState } from "react";

const UseState = () => {
  const [click, setclick] = useState(0);
  const func = () => {
    setclick((prevState) => prevState + 1);
  };

  return (
    <div>
      <p>You clicked {click} times</p>
      <p>
        The number of times you clicked is {click % 2 === 0 ? "EVEN" : "ODD"}
      </p>
      <button onClick={func}>Click me</button>
    </div>
  );
};

export default UseState;
