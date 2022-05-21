import { Todo } from "../interfaces";
import axios from "axios";
import { API_URL } from "../constants";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

export const fetchList = () => {
  return (dispatch: Dispatch) => {
    axios.get(API_URL)
      .then(({data}) => {
        dispatch({
          type: 'SET_LIST',
          payload: data
        })
      })
      .catch((e) => console.error(e))
  }
}

export const handleAdd = (task: string, setTask: (task: string) => void) => {
  return (dispatch: Dispatch) => {
    axios.post(API_URL, {
      text: task
    })
      .then(({data}) => {
        dispatch({
          type: 'ADD_TODO',
          payload: data
        })
      })
      .catch((e) => console.error(e))
    setTask('');
  }
}

export const handleDelete = (todo: Todo) => {
  // @ts-ignore
  return (dispatch: Dispatch<ThunkAction<any, any, any, any>>) => {
    axios.delete(API_URL.concat(`/${todo.id}`))
      .then(() => dispatch(fetchList()))
      .catch((e) => console.error(e))
  }
}

export const toggleComplete = (todo: Todo,) => {
  // @ts-ignore
  return (dispatch: Dispatch<ThunkAction<any, any, any, any>>) => {
    axios.patch(API_URL + `/${todo.id}`, {
      ...todo,
      is_done: !todo.is_done
    })
      .then(() => dispatch(fetchList()))
      .catch((e) => console.error(e))
  }
}
