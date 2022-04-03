import { Todo, TodoAction } from "../interfaces";
import { toggleComplete } from "../services";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface Props {
  setList: (list: Todo[]) => void;
  todo: Todo;
}

function ToggleCompleteButton({setList, todo}: Props) {

  return (
    <button onClick={() => toggleComplete(todo, setList)}>Toggle Complete</button>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  setList: (list: Todo[]) => dispatch({
    type: 'SET_LIST',
    payload: list
  })
})

export const ToggleCompleteButtonContainer = connect(
  null,
  mapDispatchToProps
)(ToggleCompleteButton);
