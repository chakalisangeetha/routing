import React, { useCallback, useMemo, useState } from 'react';
import Todos from './Todos';

const CallBackHook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo']);
  }, [todos]);
  return (
    <div>
      <h1> CallbackHook Example </h1>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>Count: {count}</div>
    </div>
  );
};

export default CallBackHook;





