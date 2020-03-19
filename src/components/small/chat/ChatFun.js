import React, { useState } from 'react';

import '../../../App.css';
import '../../small/buttons.css';
import style from '../../../modules/style';

import Message from './Message';

const Chat = (props) => {

    let [status, setStatus] = useState(false);
    //let messages = JSON.parse(localStorage.getItem("notifications"));
    let messages = props.globalState.notifications;
    const openChatBox = () => {
        setStatus(true);
    }
    const closeChatBox = () => {
        setStatus(false);
    }

    const RenderBtn = () => {
        return (
            <div
                className="btn open-chat-btn"
                style={style.unabledElement}
                onClick={openChatBox}>

            </div>

        )
    }
    const RenderChat = (props) => {

        console.log(props.messages);
        let messageArray = props.messages.map(
            (el) => <Message key={el.id} content={el.text} date={el.date_send} />
        );

        return (
            <div className="chat-box blck-border">
                <button
                    className="close-chat-btn option-text-m"
                    onClick={closeChatBox}>
                    disable chat
                </button>
                {messageArray}
            </div >


        );
    }
    return (<div className="chat">
        {status ? <RenderChat messages={messages} /> : <RenderBtn />}
    </div>
    )
}

export default Chat;
