import { TodoAction } from "../interfaces";

const initialState = { list: [] }

export const listReducer = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case 'SET_LIST':
      return { list: action.payload }
    default:
      return state;
  }
};
