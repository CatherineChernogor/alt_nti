import React from 'react';
import '../../../App.css';
import {dateCleaner} from '../../../modules/dateProcessing';

const Message = (props) =>{
    
    return (
        <div className="message blck-border" key={props.id}>
            <div className="content-box option-text-s">{props.content}</div>
            <div className="time-box small-text">{dateCleaner(props.date)}</div>
        </div>
    );
}

export default Message;