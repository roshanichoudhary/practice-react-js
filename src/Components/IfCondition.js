import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

const IfCondition = () => {
  const name = "Ro";
  if (name === "Roshani") {
    return <Component1 />;
  } else {
    return <Component2 />;
  }
};

export default IfCondition;
