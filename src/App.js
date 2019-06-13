import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Calculator from './Calculator';
import Answer from './Answer.js'
import { jsxClosingElement } from '@babel/types';

class App extends React.Component {
 
  state = { 
     operation: 'add',
     equation: []
  }

  addEquations = calc => {
      const equation =  [...this.state.equation];
      equation.unshift(calc);
    this.setState({  
      equation: equation
    });
  }

  setOperation = op => {
    this.setState({
      operation: op
    }) 
    
  }
  render(){ 
  return (
    <>
      <Welcome/>
      <Calculator addEquations={this.addEquations} setOperation={this.setOperation}/>
      <Answer answerArray = {[]}/>
    </>
  );
}}

export default App;
