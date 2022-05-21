import { Todo } from "../interfaces";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../middleware";

interface Props {
  todo: Todo;
}

export default function ToggleCompleteButton({todo}: Props) {

  const dispatch = useDispatch();

  function handleToggleComplete() {
    dispatch(toggleComplete(todo));
  }

  return (
    <button onClick={handleToggleComplete}>Toggle Complete</button>
  );
}

