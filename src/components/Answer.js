import React from 'react';
import '../css/Answer.css';

class Answer extends React.Component {

render() {
    let equationList = this.props.answerArray.map((ans) => <ol key={ans}>{ans}</ol>)

    return (
        <div className="Answer">
            <ul>
                {equationList}
            </ul>
        </div>
    );
}
}

export default Answer;
