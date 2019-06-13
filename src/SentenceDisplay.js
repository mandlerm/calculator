import React from 'react';
import './SentenceDisplay.css';


class SentenceDisplay extends React.Component {
render() {
    return (
        <div className="display">
           {this.props.sentence}    
        </div>
    );
}
}

export default SentenceDisplay;