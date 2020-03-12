import '../../App.css';
import React, { useState, useEffect } from 'react';

import Table from './TableFun';

const Task = (props) => {
    let [points, setPoints] = useState("");

    useEffect(() => {
        setPoints(props.points);
    }, [props.points]);

    return (
        <div >
            <div className="heading2 title">{props.title}</div>
            <div className="normal-text task">{props.text}</div>
            <Table id={props.id} points={points} globalState={props.globalState} />
        </div>
    );

}

export default Task;