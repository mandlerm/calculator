import React from 'react';
import '../css/Operation.css';

class Operation extends React.Component {
    render() {

        return (
            <span ref={this.operation}>
            <label className="container">+
                <input type="radio" name="radio"/>
                <span className="checkmark"></span>
            </label>
            <label className="container">-
                <input type="radio" name="radio"/>
                <span className="checkmark"></span>
            </label>
            <label className="container">*
                <input type="radio" name="radio"/>
                <span className="checkmark"></span>
            </label>
            <label className="container">/
                <input type="radio" name="radio"/>
                <span className="checkmark"></span>
            </label>
            </span>

        )
    }
}

export default Operation;
