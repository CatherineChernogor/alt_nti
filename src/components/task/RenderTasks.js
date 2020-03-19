import React from "react";
import { Route } from 'react-router-dom';

import Task from './Task';
import Info from '../main/Info';

const RenderTasks = (props) => {

    let tasks = props.globalState.tasks.map(
        (el) => 
            el.task.task_type === 1 ?
            <Route
                exact path={'/0/task/' + el.task.id}
                render={() => <Task points={el.task.points} task={el.task} globalState={props.globalState} />} />
            : <Route
                exact path={'/0/info/' + el.task.id}
                render={() => <Info title={el.task.title} text={el.task.text} />} />
        
    );
    return tasks;
}
export default RenderTasks;  