import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [myNum, setmyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    setmyNum((c) => c + 1);
  };

  const checkNumber = (num) => {
    console.log("Number is:", num);
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };

  const checkData = useMemo(() => {
    return checkNumber(myNum);
  }, [myNum]);

  return (
    <div>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>New number : {checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me"}
      </button>
    </div>
  );
};

export default UseMemo;
