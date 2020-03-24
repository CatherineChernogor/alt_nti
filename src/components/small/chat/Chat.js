import React, { useState, useEffect } from 'react';
import '../../small/common_buttons_styles.css';

import RenderBtn from './RenderBtn';
import RenderChat from './RenderChat';

const Chat = (props) => {

    let [status, setStatus] = useState(false);
    let messages = props.globalState.notifications;
    let [messageAmount, setMessageAmount] = useState(0);
    let [unread, setUnread] = useState(messageAmount);
    let amount = messages.length;

    useEffect(() => {
        
        setUnread(amount - messageAmount);
    }, [
        props.globalState.notifications,
        messageAmount,
        unread,
        amount]);

    return (
        <div className="chat">
            {status
                ? <RenderChat
                    messages={messages}
                    setStatus={setStatus}
                    unread={unread}
                    setUnread={setUnread}
                    messageAmount={messageAmount}
                    setMessageAmount={setMessageAmount} />
                : <RenderBtn
                    setStatus={setStatus}
                    unread={unread} />}
        </div>
    )
}

export default Chat;


