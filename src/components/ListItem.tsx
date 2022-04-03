import React from "react";
import { Todo } from "../interfaces";

interface Props {
  todo: Todo;
}

export default function ListItem({todo}: Props) {

  const itemStyle = {textDecoration: todo.is_done ? 'line-through' : ''};

  return (
    <li style={itemStyle} key={todo.id}>{todo.text}</li>
  );
}
