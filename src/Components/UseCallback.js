import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `New Todo`]);
  }, [todos]);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />

      <p>Count: {count}</p>
      <button onClick={increment}>Count</button>
    </div>
  );
};

export default UseCallback;
