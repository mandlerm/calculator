import React from 'react';
import './Operation.css';

class Operation extends React.Component {
    render() {

        return (
            <div class="wrapper">
                <button class="add">+</button>
                <button class="subtract">-</button>
                <button class="multiply">*</button>
                <button class="divide">/</button>    
            </div>

        )
    }
}

export default Operation;