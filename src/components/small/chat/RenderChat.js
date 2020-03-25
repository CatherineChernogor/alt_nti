import React, { useEffect } from 'react';
import Message from './Message';

const RenderChat = (props) => {

    const closeChatBox = () => {
        props.setStatus(false);
    }
    let messageArray = props.messages.map(
        (el) => <Message
            key={el.id}
            content={el.text}
            date={el.date_send} />
    );
    useEffect(() => {
        props.setMessageAmount(props.messageAmount+props.unread);
        props.setUnread(0);
    }, []);


    return (
        <div className="chat-box blck-border">
            <button
                className="close-chat-btn option-text-m"
                onClick={closeChatBox}>
                закрыть уведомления
            </button>
           <Message key="-1" date="token" content={`Нажмите чтобы скопировать токен \n\n token:${sessionStorage.getItem('token')}`} />
           {messageArray}
        </div >


    );
}
export default RenderChat;
