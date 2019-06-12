import React from 'react';
import Operation from './Operation.js'
import './Calculator.css';


class Calculator extends React.Component {
    firstNum = React.createRef();
    secondNum = React.createRef();
    
    constructor() {
        super();
        this.state = {
            operation: 'add',
            mathSentence: ''
          };
        this.handleChange = this.handleChange.bind(this);
      }

    calculate = (event)  => {
        event.preventDefault();
        let first = parseInt(this.firstNum.current.value);
        let second = parseInt(this.secondNum.current.value);
        let operation = this.state.operation;

        let answer = this.solve(first, second, operation);
        this.setState({
            mathSentence: answer
          });
        
        alert(answer)
        
       
 
    };

    solve = (first, second, operation) => {
    
        switch(operation) {
            case "sub":
                return `${first} - ${second} = ${first - second}`;
            case "mult":
                return `${first} * ${second} = ${first * second}`;
            case "div":
                return `${first} / ${second} = ${first / second}`;
            default:
                return `${first} + ${second} = ${first + second}`;
        }
    }

    handleChange = (event) => {
        this.setState({
            operation: event.target.value
          });
    };

render() {
    return (
        <span className="Calculator">
        <p>Enter two numbers and choose your operation of choice. Then click "calculate". If you do not choose an operation, addition will be selected by default. </p>
        
        <form onSubmit={this.calculate}>
            <input  
                type="number" 
                ref={this.firstNum}
                required 
            />
            
            <span ref={this.operation}>
                <label className="container">+
                    <input 
                        type="radio" 
                        name="radio"
                        value="add"
                        checked={this.state.operation === "add"}
                        onChange={this.handleChange}    
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container">-
                    <input 
                        type="radio" 
                        name="radio"
                        value="sub"
                        checked={this.state.operation === "sub"}
                        onChange={this.handleChange} 
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container">*
                    <input 
                         type="radio" 
                        name="radio"
                        value="mult"
                        checked={this.state.operation === "mult"}
                        onChange={this.handleChange}    
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container">/
                    <input 
                        type="radio" 
                        name="radio"
                        value="div"
                        checked={this.state.operation === "div"}
                        onChange={this.handleChange}    
                    />
                    <span className="checkmark"></span>
                </label>
            </span>
            <input 
                type="number" 
                ref={this.secondNum} 
                required
            />
            <button type="submit" >Calculate</button>
        </form>
    
        <span> {this.state.answer}</span>
        </span>
    );
}
}

export default Calculator;