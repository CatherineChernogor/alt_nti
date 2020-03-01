import React from 'react';
import '../../App.css';

const Info = (props) => {
    return (
        <div className="main">
            <div className="heading2 title">{props.title}</div>
            <div className="normal-text">{props.text}</div>
        </div>
    );

}

export default Info;