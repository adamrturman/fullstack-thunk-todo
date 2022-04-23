import React, { useState } from "react";
import { handleChange } from "../services";
import { Todo, TodoAction } from "../interfaces";
import { connect, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { fetchList, handleAdd } from "../middleware";

interface Props {
  setList: () => void;
}

function Input({setList}: Props) {
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();

  function handleAddTodo() {
    dispatch(handleAdd(task, setList, setTask));
  }

  return (
    <>
      <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, setTask)} value={task}/>
      <button onClick={handleAddTodo}>Click to add</button>
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  // @ts-ignore
  setList: () => dispatch(fetchList())
})

export const InputContainer = connect(
  null,
  mapDispatchToProps
)(Input);
