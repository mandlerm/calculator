import React from 'react';
import './Answer.css';

class Answer extends React.Component {
render() {
    return (
        <div className="Answer">
            <h3 className="Answer-header">See the last {this.props.length} calculations</h3>
        </div>
    );
}
}

export default Answer;