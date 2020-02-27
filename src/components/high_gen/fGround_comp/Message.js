import React from 'react';
import '../../../App.css';

function Message(props) {
    return (
        <div className="message blck-border" key={props.id}>
            <div className="content-box option-text-s">{props.content}</div>
            <div className="time-box small-text">{props.time + ' ' + props.date}</div>
        </div>
    );
}

export default Message;