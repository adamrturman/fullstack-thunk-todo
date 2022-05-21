import { Todo } from "../interfaces";
import React from "react";

export const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setTask: (task: string) => void) => {
  setTask(event.target.value);
}

export const sortListById = (list: Todo[]) =>
  list.sort((a, b) => a.id - b.id);
