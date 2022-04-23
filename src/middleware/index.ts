import { Todo } from "../interfaces";
import axios from "axios";
import { API_URL } from "../constants";
import { Dispatch } from "redux";

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

export const handleAdd = (task: string, setList: (list: Todo[]) => void, setTask: (task: string) => void) => {
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
