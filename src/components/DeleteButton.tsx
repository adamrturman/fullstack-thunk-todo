import React from "react";
import { Todo } from "../interfaces";
import {  useDispatch } from "react-redux";
import { handleDelete } from "../middleware";

interface Props {
  todo: Todo;
}

export function DeleteButton({todo}: Props) {

  const dispatch = useDispatch();

  function deleteTodoAndRefetch() {
    dispatch(handleDelete(todo));
  }

  return (
    <button onClick={deleteTodoAndRefetch}>Delete</button>
  );
}
