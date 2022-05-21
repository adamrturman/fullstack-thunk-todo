import { StoreState, Todo } from "../interfaces";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import ListItem from "./ListItem";
import { sortListById } from "../services";
import { fetchList } from "../middleware";
import ToggleCompleteButton from "./ToggleCompleteButton";
import { DeleteButton } from "./DeleteButton";

interface Props {
  list: Todo[];
}

function List({list}: Props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  const displayedTodos = sortListById(list).map(todo => (
    <>
      <ListItem todo={todo} />
      <ToggleCompleteButton todo={todo} />
      <DeleteButton todo={todo} />
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
  () => ({})
)(List);
