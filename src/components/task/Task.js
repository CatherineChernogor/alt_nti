import '../../App.css';
import React, { useState, useEffect } from 'react';

import Table from './TableFun';

const Task = (props) => {

    //console.log(props);
    
    let [points, setPoints] = useState("");

    useEffect(() => {
        setPoints(props.points);
    }, [props.points]);

    return (
        <div >
            <div className="heading2 title">{props.task.title}</div>
            <div className="normal-text task">{props.task.text}</div>
            <Table id={props.task.id} points={points} globalState={props.globalState} />
        </div>
    );

}

export default Task;