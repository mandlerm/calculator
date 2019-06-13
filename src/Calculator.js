import React from 'react';
import Operation from './Operation.js'
import './Calculator.css';
import SentenceDisplay from './SentenceDisplay.js';


class Calculator extends React.Component {
    firstNum = React.createRef();
    secondNum = React.createRef();
    
    constructor() {
        super();
        console.log(this.state)
        this.handleChange = this.handleChange.bind(this);
      }

    calculate = (event)  => {
        event.preventDefault();
        const equation = {
            first: parseFloat(this.firstNum.current.value),
            second: parseFloat(this.secondNum.current.value),
            operation: this.props.operation,
            answer: this.solve(parseFloat(this.firstNum.current.value), parseFloat(this.secondNum.current.value), this.props.operation)
        }
        
        this.props.addEquations(equation.answer);
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
        console.log(event.target.value)
        this.props.setOperation(event.target.value)
        }

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
                        onChange={this.handleChange}    
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container">-
                    <input 
                        type="radio" 
                        name="radio"
                        value="sub"
                        onChange={this.handleChange} 
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container">*
                    <input 
                         type="radio" 
                        name="radio"
                        value="mult"
                        onChange={this.handleChange}    
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container">/
                    <input 
                        type="radio" 
                        name="radio"
                        value="div"
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
        </span>
        
    );
}
}

export default Calculator;