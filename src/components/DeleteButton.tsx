import React from "react";
import { Todo, TodoAction } from "../interfaces";
import axios from "axios";
import { API_URL } from "../constants";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { fetchList } from "../middleware";

interface Props {
  todo: Todo;
}

function DeleteButton({todo}: Props) {

  const handleDelete = (todo: Todo) => {
    axios.delete(API_URL.concat(`/${todo.id}`))
      .then(() => fetchList())
      .catch((e) => console.error(e))
  }

  return (
    <button onClick={() => handleDelete(todo)}>Delete</button>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  // @ts-ignore
  setList: () => dispatch(fetchList())
})

export const DeleteButtonContainer = connect(
  null,
  mapDispatchToProps
)(DeleteButton);
