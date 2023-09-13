import React from "react";

const Garag = (props) => {
  return (
    <h2>
      My car name is {props.brand.name} and modal is {props.brand.modal}
    </h2>
  );
};

export default Garag;
