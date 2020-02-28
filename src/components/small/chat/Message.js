import React from 'react';
import '../../../App.css';

function Message(props) {
    let dateCleaner = (date) => {

        let data =date.split("T");
        let time = data[0];
        data = data[1].split(".")[0];
        time += '\t' +data +'\t';

        return time;
    }
    return (
        <div className="message blck-border" key={props.id}>
            <div className="content-box option-text-s">{props.content}</div>
            <div className="time-box small-text">{dateCleaner(props.date)}</div>
        </div>
    );
}

export default Message;