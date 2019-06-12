import React from 'react';
import Operation from './Operation.js'
import './Calculator.css';

class Calculator extends React.Component {
render() {
    return (
        <div class="Calculator">
        <Operation/>
        </div>
    );
}
}

export default Calculator;