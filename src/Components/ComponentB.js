import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div>
      <h3>I am Component B</h3>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
