import React from 'react';
import './Operation.css';

class Operation extends React.Component {
    render() {

        return (
            <span >
            <label className="container">+
                <input type="radio" ref={this.add} name="radio"/>
                <span className="checkmark"></span>
            </label>
            <label className="container">-
                <input type="radio" ref={this.sub} name="radio"/>
                <span className="checkmark"></span>
            </label>
            <label className="container">*
                <input type="radio" ref={this.mult} name="radio"/>
                <span className="checkmark"></span>
            </label>
            <label className="container">/
                <input type="radio" ref={this.divide} name="radio"/>
                <span className="checkmark"></span>
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