import React from 'react';
import Operation from './Operation.js'
import './Calculator.css';


class Calculator extends React.Component {

    calculate() {

    }
    
render() {
    return (
        <span class="Calculator">
        <p>Enter two numbers and choose your operation of choice. Then click "calculate". If you do not choose an operation, addition will be selected by default. </p>
        
        <form>
            <input type="number" required ></input>
            <Operation required/>
            <input type="number" required ></input>
            <button type="submit" >Calculate</button>
        </form>
    
        </span>
    );
}
}

export default Calculator;