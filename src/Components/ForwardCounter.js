import React from "react";
import Card from "./Card";
import useCounter from "../Hooks/useCounter";

const ForwardCounter = () => {
  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
