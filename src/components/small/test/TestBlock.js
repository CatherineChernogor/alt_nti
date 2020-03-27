import React from 'react';
import './test.css';
import style from '../../../modules/style';
import { useState } from 'react';
import TestRender from './TestRender';

const TestBlock = () => {

    let [state, setState] = useState(false);

    const openNotPanel = () => {
        setState(true);
    }
    const closeNotPanel = () => {
        setState(false);
    }

    return (
        state
            ? <RenderBox
                closeNotPanel={closeNotPanel} />
            : <RenderBtn
                openNotPanel={openNotPanel} />
    );
}

export default TestBlock;

const RenderBox = (props) => {
    return (
        <div className="screen not-panel-align">
            <div
                className="gray-screen"
                style={style.lowerElement}>
            </div>

            <div
                className='msg-box'
                style={style.upperElement}>
                <button className='btn not-close-btn' onClick={props.closeNotPanel}></button>
                <div className='not-text normal-text'>
                    <TestRender />
                </div>
            </div>

        </div>
    );
}

const RenderBtn = (props) => {

    return (
        <button
            className="btn not-open-btn"
            style={style.unabledElement}
            onClick={props.openNotPanel}
            title="Пройди тест и узнай какой ты кубитоклобус"
        >

        </button>
    );
}