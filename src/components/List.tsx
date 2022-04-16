import { StoreState, Todo, TodoAction } from "../interfaces";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DeleteButtonContainer } from "./DeleteButton";
import ListItem from "./ListItem";
import { ToggleCompleteButtonContainer } from "./ToggleCompleteButton";
import { fetchList, sortListById } from "../services";
import { Dispatch } from "redux";
import { fetchTodos } from "../middleware/todosThunk";

interface Props {
  list: Todo[];
  setList: () => void;
}

function List({list, setList}: Props) {

  useEffect(() => {
    setList()
  }, []);

  const displayedTodos = sortListById(list).map(todo => (
    <>
      <ListItem todo={todo} />
      <ToggleCompleteButtonContainer todo={todo} />
      <DeleteButtonContainer todo={todo} />
    </>
  ));

  return (
    <>{displayedTodos}</>
  );
}

const mapStateToProps = (state: StoreState) => ({
  list: state.list
});

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  setList: () => dispatch(
    // @ts-ignore
    fetchTodos()
  )
});

export const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
