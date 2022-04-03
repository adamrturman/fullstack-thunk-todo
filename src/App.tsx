import React, { useEffect } from 'react';
import './App.css';
import { connect } from "react-redux";
import { Todo, TodoAction } from "./interfaces";
import { Dispatch } from "redux";
import { fetchList } from "./services";
import { ListContainer } from "./components/List";
import { InputContainer } from "./components/Input";

interface Props {
  setList: (list: Todo[]) => void;
}

function App({setList}: Props) {

  useEffect(() => {
    fetchList(setList);
  }, []);

  return (
    <div>
      <InputContainer />
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
