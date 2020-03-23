import React, { useState } from 'react';

import '../../../App.css';
import '../../small/buttons.css';

import RenderBtn from './RenderBtn';
import RenderChat from './RenderChat';

const Chat = (props) => {

    let [status, setStatus] = useState(false);
    let messages = props.globalState.notifications;
    let [messageAmount, setMessageAmount] = useState(1);
    let [unread, setUnread] = useState(messageAmount);

    return (
        <div className="chat">
            {status
                ? <RenderChat messages={messages} setStatus={setStatus} setUnread={setUnread} />
                : <RenderBtn setStatus={setStatus} unread={unread}/>}
        </div>
    )
}

export default Chat;


