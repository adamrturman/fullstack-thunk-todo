import { StoreState, Todo, TodoAction } from "../interfaces";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DeleteButtonContainer } from "./DeleteButton";
import ListItem from "./ListItem";
import { ToggleCompleteButtonContainer } from "./ToggleCompleteButton";
import { sortListById } from "../services";
import { fetchList } from "../middleware/index";
import { Dispatch } from "redux";

interface Props {
  list: Todo[];
  setList: () => void;
}

function List({list, setList}: Props) {


  useEffect(() => {
    setList();
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
  // @ts-ignore
  setList: () => dispatch(fetchList())
});


export const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
