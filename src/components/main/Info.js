import React from 'react';
import '../../App.css';

class Info extends React.Component {
    render() {
        return (
        <div className="main">
            <div className="heading2 title">{this.props.title}</div>
            <div className="normal-text">{this.props.text}</div>
        </div>
        );
    }
}

export default Info;