import React from 'react';
import { dateCleaner } from '../../../modules/dateProcessing';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactMarkdown from 'react-markdown';
import './chat.css';

const Message = (props) => {

    return (

        props.date === 'token' ?
            <div className="message token-mess blck-border" key={props.id}>

                <CopyToClipboard text={sessionStorage.getItem('token')}>
                    <div className="content-box token-mess option-text-s"><ReactMarkdown source={props.content} /></div>
                </CopyToClipboard>
            </div>

            :
            <div className="message blck-border" key={props.id}>
                <div className="content-box option-text-s"><ReactMarkdown source={props.content} /></div>
                <div className="time-box small-text">{dateCleaner(props.date)}</div>
            </div>

    );
}

export default Message;