import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from "react-redux";
import { StoreState, Todo, TodoAction } from "./interfaces";
import { Dispatch } from "redux";
import { API_URL } from "./constants";
import axios from 'axios';
import { fetchList, handleAdd, handleChange } from "./services";

interface Props {
  list: Todo[];
  setList: (list: Todo[]) => void;
}

function App({list, setList}: Props) {
  const [task, setTask] = useState<string>('');

  useEffect(() => {
    fetchList(setList);
  }, []);

  const displayedTodos = list.map(todo => (
    <>
      <li key={todo.id}>{todo.text}</li>
    </>
  ));

  return (
    <div>
      <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, setTask)} value={task} />
      <button onClick={() => handleAdd(task, setList, setTask)}>Click to add</button>
      {displayedTodos}
    </div>
  );
}

const mapStateToProps = (state: StoreState) => ({
  list: state.list
});

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  setList: (list: Todo[]) => dispatch({
    type: 'SET_LIST',
    payload: list
  })
})

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
