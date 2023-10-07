import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("Child render");
  return (
    <div>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todos);
