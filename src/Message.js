import React, { createElement } from 'react';
import '../App.css';

class Message extends React.Component {

    constructor() {
        super();
        this.state = { notification: false };
    }

    render() {
        if (this.state.notification) {
            return this.renderBox();
        } else {
            return this.renderBtn();
        }
    }
}

export default Message;