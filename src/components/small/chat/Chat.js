import React, { useState, useEffect } from 'react';
import '../../small/common_buttons_styles.css';

import RenderBtn from './RenderBtn';
import RenderChat from './RenderChat';

const Chat = (props) => {

    let [status, setStatus] = useState(false);
    let messages = props.globalState.notifications;

    let [mes, setMes] = useState(0);
    let [unread, setUnread] = useState(mes.length);
    let [read, setRead] = useState(0);

    useEffect(() => {

        if (messages != undefined) {


            let messageIDArray = messages
                .map((el) => el.id);
            messageIDArray.unshift(-1);
            messageIDArray = messageIDArray.filter((thing, index) => {
                return index === messageIDArray.findIndex(obj => {
                    return JSON.stringify(obj) === JSON.stringify(thing);
                });
            });
            setMes(messageIDArray.length)
        }


        if (localStorage.getItem('read_messages') === null)
            setRead(0);
        else
            setRead(JSON.parse(localStorage.getItem('read_messages')).length);

        //console.log(mes - read, "rerender")

        setUnread(mes - read)

    }, [
        messages,
        unread,
        read,
        mes
    ]);

    return (
        <div className="chat">
            {status
                ? <RenderChat
                    messages={messages}
                    setStatus={setStatus}
                    setUnread={setUnread}
                />
                : <RenderBtn
                    setStatus={setStatus}
                    unread={unread} />}
        </div>
    )
}

export default Chat;


