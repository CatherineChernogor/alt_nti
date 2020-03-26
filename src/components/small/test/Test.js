import React from 'react';
import { test_data } from './test_data';

const Test = (props) => {

    return (
        <div className="test">
            <div className="header">
                <div className="question">{test_data[props.state][0]}</div>
                <div className="question">{props.state}/10</div>
            </div>
            <ul className="answers">
                <li
                    className="answer"
                    onClick={props.action.incrementRect}>
                    {test_data[props.state][1]}
                </li>
                <li
                    className="answer"
                    onClick={props.action.incrementPyr}>
                    {test_data[props.state][2]}
                </li>
                <li
                    className="answer"
                    onClick={props.action.incrementCyl}>
                    {test_data[props.state][3]}
                </li>
            </ul>
        </div>

    )
}
export default Test;