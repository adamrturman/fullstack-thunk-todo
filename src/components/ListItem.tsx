import React from "react";
import { Todo } from "../interfaces";

interface Props {
  todo: Todo;
}

export default function ListItem({todo}: Props) {

  return (
    <li key={todo.id}>{todo.text}</li>
  );
}
