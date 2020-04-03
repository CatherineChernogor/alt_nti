import React from 'react';
import { result } from './test_data';

const Result = (props) => {

    return (
        <div className="test-result">
            <div className="test-result-text">{result[props.result]}</div>
            <div className={`test-result-image ${props.img}`}></div>
        </div >
    )
}
export default Result;