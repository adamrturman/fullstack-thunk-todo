import React from 'react';
import './App.css';
import { connect } from "react-redux";
import { ListContainer } from "./components/List";
import Input from "./components/Input";

function App() {

  return (
    <>
      <Input />
      <ListContainer />
    </>
  );
}

export const AppContainer = connect(
  null,
  () => {}
)(App);
