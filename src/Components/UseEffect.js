import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    alert("I am clicked");
    console.log("I am clicked");
  }, [count]);

  return (
    <div>
      <p>Alert on Increase</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase {count}
      </button>
      <button onClick={() => setCount1(count1 - 1)}>Decrease {count1}</button>
    </div>
  );
};

export default UseEffect;
