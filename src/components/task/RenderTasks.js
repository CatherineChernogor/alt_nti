import React from "react";
import { Route } from 'react-router-dom';

import Task from './Task';
import Info from '../main/Info';

const RenderTasks = (props) => {

    //console.log(props.tasks);
    let tasks = props.tasks.map(
        (el) =>
            el.task.task_type === 1 ?
                <Route
                    exact path={'/0/task/' + el.id}
                    render={() => <Task title={el.task.title} text={el.task.text} id={el.task.id} points={el.task.points} globalState={props.globalState} />} />
                : <Route
                    exact path={'/0/info/' + el.id}
                    render={() => <Info title={el.task.title} text={el.task.text} />} />
    );
    return tasks;
}
export default RenderTasks;  