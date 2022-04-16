import { Dispatch } from "redux";
import axios from "axios";
import { API_URL } from "../constants";

export const fetchTodos = () => {
  return function(dispatch: Dispatch) {
    // make the API call, in .then() call dispatch() with a plain object action
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
