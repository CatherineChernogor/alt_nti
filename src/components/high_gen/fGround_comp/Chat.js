import React, { createElement } from 'react';
import '../../../App.css';
import '../../../style/buttons.css';
import style from '../../../style/style';
import Message from './Message';



class Chat extends React.Component {

    constructor() {
        super()
        this.state = { chat: false }
    }
    openChatBox = () => {
        this.setState({ chat: true })
    }
    closeChatBox = () => {
        this.setState({ chat: false })
    }
    renderChat = () => {
        return (
            <div className="chat-box blck-border">
                <button
                    className="close-chat-btn option-text-m"
                    onClick={this.closeChatBox}>
                    disable chat
                </button>
                <Message
                    content={message.content}
                    date={message.date}
                    time={message.time}
                ></Message>
                <Message
                    content={message2.content}
                    date={message2.date}
                    time={message2.time}
                ></Message>
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
    }
    render() {
        if (this.state.chat) {
            return this.renderChat();
        } else {
            return this.renderBtn();
        }
    }
}

export default Chat;

//test data 
let message = {

    content: "минимум одна задача должна быть сдана в течении 15 минут. Открыт доступ к следующей задаче.",
    date: "25.04.20",
    time: "14:32"
}

let message2 = {

    content: "минимум одна задача должна быть сдана в течении 15 минут. Открыт доступ к следующей задаче.",
    date: "27.04.20",
    time: "15:32"
}