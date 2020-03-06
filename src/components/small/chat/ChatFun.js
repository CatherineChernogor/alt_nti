import React, { useState, useEffect } from 'react';

import '../../../App.css';
import '../../small/buttons.css';
import style from '../../../modules/style';

import Message from './Message';

const Chat = (props) => {

    let [status, setStatus] = useState(false);

    useEffect(() => {
        let messages = JSON.parse(localStorage.getItem("notifications"));
        if (status === true) {
            return renderChat(messages);
        } else {
            return renderBtn();
        }
    }, []);
    let openChatBox = () => {
        setStatus(true);
    }
    let closeChatBox = () => {
        setStatus(false);
    }


    let renderChat = (messages) => {

        let messageArray = messages.map(
            (el) => <Message key={el.id} content={el.text} date={el.date_send} />
        );

        return (
            <div className="chat-box blck-border">
                <button
                    className="close-chat-btn option-text-m"
                    onClick={this.closeChatBox}>
                    disable chat
                </button>
                {messageArray}

            </div >
        );
    }
    let renderBtn = () => {
        return (
            <div
                className="btn open-chat-btn"
                style={style.unabledElement}
                onClick={this.openChatBox}>

            </div>
        );
    }
}

export default Chat;

/*

renderChat = (messages) => {

    let messageArray = messages.map(
        (el) => <Message key={el.id} content={el.text} date={el.date_send} />
    );

    return (
        <div className="chat-box blck-border">
            <button
                className="close-chat-btn option-text-m"
                onClick={this.closeChatBox}>
                disable chat
            </button>
            {messageArray}

        </div >
    );
}
renderBtn = () => {
    return (
        <div
            className="btn open-chat-btn"
            style={style.unabledElement}
            onClick={this.openChatBox}>

        </div>
    );
}*/