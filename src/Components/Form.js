import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const submitHandle = (event) => {
    event.preventDefault();
    alert(`The name entered was: ${name}`);
  };

  return (
    <form onSubmit={submitHandle}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default Form;
