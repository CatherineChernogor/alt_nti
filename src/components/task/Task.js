import '../../App.css';
import React from 'react';

import Table from './TableFun';

const Task = (props) => {
    return (
        <div >
            <div className="heading2 title">{props.title}</div>
            <div className="normal-text task">{props.text}</div>
            <Table id={props.id} />
        </div>
    );

}

export default Task;