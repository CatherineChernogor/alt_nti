import React, { createElement } from 'react';
import '../../../App.css';
import '../../../style/buttons.css';
import style from '../../../style/style';

class Notification extends React.Component {

    constructor() {
        super();
        this.state = { notification: false };
    }

    openNotPanel = () => {
        this.setState({ notification: true });
    }
    closeNotPanel = () => {
        this.setState({ notification: false });
    }

    renderBtn = () => {
        return (
            <button
                className="btn not-open-btn"
                style={style.unabledElement}
                onClick={this.openNotPanel}>

            </button>
        );
    }
    renderBox = () => {
        return (
            <div className="screen not-panel-align">
                <div
                    className="gray-screen"
                    style={style.lowerElement}>
                </div>

                <div
                    className='msg-box'
                    style={style.upperElement}>
                    <button className='btn not-close-btn' onClick={this.closeNotPanel}></button>
                    <div className='not-text normal-text'>{msg }</div>
                </div>
            </div>
        );
    }

    render() {
        if (this.state.notification) {
            return this.renderBox();
        } else {
            return this.renderBtn();
        }
    }
}

export default Notification;

//test data
let msg = "в этом окне будетт выводиться различная инвормация для пользователя. То есть может выводится контент любого типа. если петя напишет к немк апи"