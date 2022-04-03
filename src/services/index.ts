import axios from "axios";
import { API_URL } from "../constants";
import { Todo } from "../interfaces";
import React from "react";

export const fetchList = (setList: (list: Todo[]) => void) => {
  axios.get(API_URL)
    .then(({data}) => setList(data))
    .catch((e) => console.error(e))
}

export const handleAdd = (task: string, setList: (list: Todo[]) => void, setTask: (task: string) => void) => {
  axios.post(API_URL, {
    text: task
  })
    .then(() => fetchList(setList))
    .catch((e) => console.error(e))
  setTask('');
}

export const handleChange = (event: React.ChangeEvent<HTMLInputElement>, setTask: (task: string) => void) => {
  setTask(event.target.value);
}
