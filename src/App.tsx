import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from "react-redux";
import { Todo, TodoAction } from "./interfaces";
import { Dispatch } from "redux";
import { fetchList, handleAdd, handleChange } from "./services";
import { ListContainer } from "./components/List";

interface Props {
  setList: (list: Todo[]) => void;
}

function App({setList}: Props) {
  const [task, setTask] = useState<string>('');

  useEffect(() => {
    fetchList(setList);
  }, []);

  return (
    <div>
      <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, setTask)} value={task} />
      <button onClick={() => handleAdd(task, setList, setTask)}>Click to add</button>
      <ListContainer />
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
  setList: (list: Todo[]) => dispatch({
    type: 'SET_LIST',
    payload: list
  })
})

export const AppContainer = connect(
  null,
  mapDispatchToProps
)(App);
