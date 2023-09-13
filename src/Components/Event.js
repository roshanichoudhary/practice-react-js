import React from "react";

function Event() {
  const shoot = (a) => {
    alert(a);
  };

  return <button onClick={() => shoot("Goal")}>Click Event</button>;
}

export default Event;
