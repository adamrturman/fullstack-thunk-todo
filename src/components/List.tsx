import { StoreState, Todo } from "../interfaces";
import React from "react";
import { connect } from "react-redux";
import { DeleteButtonContainer } from "./DeleteButton";
import ListItem from "./ListItem";
import { ToggleCompleteButtonContainer } from "./ToggleCompleteButton";
import { sortListById } from "../services";

interface Props {
  list: Todo[];
}

function List({list}: Props) {

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


export const ListContainer = connect(
  mapStateToProps,
  () => {}
)(List);
