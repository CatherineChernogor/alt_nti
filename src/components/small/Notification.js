import React from 'react';
import '../../App.css';
import '../small/buttons.css';
import style from '../../modules/style';

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
let msg = "здесь будет или игра с кубитоклобусами или тест кто ты из них"