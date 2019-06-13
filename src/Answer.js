import React from 'react';
import './Answer.css';

class Answer extends React.Component {

render() {
    console.log(this.props.length)
    let equationList = this.props.answerArray.map((ans) => <ol>{ans}</ol>)
     
    console.log(equationList)
    return (
        <div className="Answer">
            <h3 className="Answer-header">See the last {this.props.length} calculations</h3>
            <ul>
                {equationList}
            </ul>
        </div>
    );
}
}

export default Answer;