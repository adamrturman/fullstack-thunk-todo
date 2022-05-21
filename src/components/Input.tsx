import React, { useState } from "react";
import { handleChange } from "../services";
import { useDispatch } from "react-redux";
import { handleAdd } from "../middleware";

export default function Input() {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();

  function handleAddTodo() {
    dispatch(handleAdd(task, setTask));
  }

  return (
    <>
      <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, setTask)} value={task}/>
      <button onClick={handleAddTodo}>Click to add</button>
    </>
  );
}

