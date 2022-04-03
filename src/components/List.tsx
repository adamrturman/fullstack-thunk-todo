import { StoreState, Todo } from "../interfaces";
import React from "react";
import { connect } from "react-redux";

interface Props {
  list: Todo[];
}
function List({list}: Props) {

  const displayedTodos = list.map(todo => (
    <>
      <li key={todo.id}>{todo.text}</li>
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
