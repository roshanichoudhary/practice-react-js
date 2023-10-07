import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <div>
      <h3>I am Component A</h3>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
