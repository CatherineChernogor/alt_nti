import React from 'react';
import { result } from './test_data';

const Result = (props) => {

    console.log(`./img/${props.img}.png`)
    return (
        <div className="test-result">
            <div className="test-result-text">{result[props.result]}</div>
            <div className={`test-result-image ${props.img}`}></div>
        </div >
    )
}
export default Result;