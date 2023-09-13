import React from "react";

const TernaryOp = () => {
  const age = 23;

  return <div>{age >= 18 ? "You are eligible" : "You are not eligible"}</div>;
};

export default TernaryOp;
