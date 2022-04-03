import React, { useState } from "react";
import { handleAdd, handleChange } from "../services";
import { Todo, TodoAction } from "../interfaces";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  setList: (list: Todo[]) => void;
}

function Input({setList}: Props) {
  const [task, setTask] = useState<string>('');

  return (
    <>
      <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, setTask)} value={task}/>
      <button onClick={() => handleAdd(task, setList, setTask)}>Click to add</button>
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  setList: (list: Todo[]) => dispatch({
    type: 'SET_LIST',
    payload: list
  })
})

export const InputContainer = connect(
  null,
  mapDispatchToProps
)(Input);
