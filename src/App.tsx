import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { ListContainer } from "./components/List";
import { InputContainer } from "./components/Input";

function App() {

  return (
    <>
      <InputContainer />
      <ListContainer />
    </>
  );
}

export const AppContainer = connect(
  null,
  () => {}
)(App);
