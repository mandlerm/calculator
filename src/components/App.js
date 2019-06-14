import React from 'react';
import '../css/App.css';
import Welcome from './Welcome';
import Calculator from './Calculator';
import Answer from './Answer'
import base from '../base';
// import { jsxClosingElement } from '@babel/types';

class App extends React.Component {
  state = {
     operation: 'add',
     equation: []
  };

  // componentDidMount() {
  //   this.ref = base.syncState('equations', {
  //     context: this,
  //     state: 'equation'
  // });
  // }

  addEquations = calc => {
    console.log("this.state " + this.state.equation);
      const equation =  [...this.state.equation];
      equation.unshift(calc);
    this.setState({
      equation: equation.slice(0,10)
    });
  }

  setOperation = op => {
    this.setState({
      operation: op
    })

  }
  render(){
    let answerArray = this.state.equation;
    let arraySize = this.state.equation.length;

  return (
    <>
      <Welcome/>
      <Calculator addEquations={this.addEquations} setOperation={this.setOperation} operation={this.state.operation}/>
      <Answer length={arraySize} answerArray={answerArray}/>
    </>
  );
}}

export default App;
