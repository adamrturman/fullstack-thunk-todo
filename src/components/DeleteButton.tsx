import React from "react";
import { Todo, TodoAction } from "../interfaces";
import axios from "axios";
import { API_URL } from "../constants";
import { fetchList } from "../services";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface Props {
  setList: (list: Todo[]) => void;
  todo: Todo;
}

function DeleteButton({setList, todo}: Props) {

  const handleDelete = (todo: Todo) => {
    axios.delete(API_URL.concat(`/${todo.id}`))
      .then(() => fetchList(setList))
      .catch((e) => console.error(e))
  }

  return (
    <button onClick={() => handleDelete(todo)}>Delete</button>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  setList: (list: Todo[]) => dispatch({
    type: 'SET_LIST',
    payload: list
  })
})

export const DeleteButtonContainer = connect(
  null,
  mapDispatchToProps
)(DeleteButton);
