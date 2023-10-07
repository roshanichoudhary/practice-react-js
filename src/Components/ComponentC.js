import React, { useContext } from "react";
import { PersonContext } from "../App";

const ComponentC = () => {
  const person = useContext(PersonContext);
  return (
    <div>
      <h3>I am Component C</h3>
      <p className="clr">Hello {person} Again</p>
    </div>
  );
};

export default ComponentC;
