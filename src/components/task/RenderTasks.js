import React from "react";
import { Route } from 'react-router-dom';
import Task from './Task';
import Info from '../main/Info';

const RenderTasks = (props) => {

    let tasks = props.globalState.contest.tasks.map(
        (el) => el.task_type.id === 1
            ? <Route
                key={el.id}
                exact path={'/0/task/' + el.id}
                render={() =>
                    <Task points={el.points} task={el} globalState={props.globalState} />} />
            : <Route
                key={el.id}
                exact path={'/0/info/' + el.id}
                render={() =>
                    <Info title={el.title} text={el.text} />} />
    );
    return tasks;
}
export default RenderTasks;  