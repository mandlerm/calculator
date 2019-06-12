import React from 'react';
import './Operation.css';

class Operation extends React.Component {
    render() {

        return (
            <span >
            <label class="container">+
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">-
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">*
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">/
                <input type="radio" name="radio"/>
                <span class="checkmark"></span>
            </label>
            </span>
        
        )
    }
}

export default Operation;

 {/* <div class="wrapper">
                <button class="add">+</button>
                <button class="subtract">-</button>
                <button class="multiply">*</button>
                <button class="divide">/</button>    
            </div> */}