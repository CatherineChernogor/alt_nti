import React from "react";
import { Route } from 'react-router-dom';

import Task from './Task';
import Info from '../main/Info';

const RenderTasks = (props) => {

    let tasks = props.globalState.contest.tasks.map(
        (el) => {
            if (el.task_type.id === 1)
                return <Route
                    exact path={'/0/task/' + el.id}
                    render={() => <Task points={el.points} task={el} globalState={props.globalState} />} />
            else if (el.task_type.id === 2)
                return <Route
                    exact path={'/0/info/' + el.id}
                    render={() => <Info title={el.title} text={el.text} />} />

        }
    );
    return tasks;
}
export default RenderTasks;  