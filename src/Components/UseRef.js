import React, { useRef, useState } from "react";

const UseRef = () => {
  const [myData, setMyData] = useState("");
  const inputEle = useRef("");

  const changeStyle = () => {
    inputEle.current.style.backgroundColor = "pink";
  };

  return (
    <div>
      <input
        ref={inputEle}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      ></input>
      <button onClick={changeStyle}>Change Bg Color</button>
    </div>
  );
};

export default UseRef;
