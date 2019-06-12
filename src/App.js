import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Calculator from './Calculator';
import Answer from './Answer.js'

function App() {
  return (
    <>
      <Welcome/>
      <Calculator/>
      <Answer length = {5}/>
    </>
  );
}

export default App;
