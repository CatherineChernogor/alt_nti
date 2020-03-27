import React from 'react';

import MainRender from './MainRender';
import { Redirect } from 'react-router-dom';

const MainHandler = (props) => {

    //console.log(props.globalState.contest.tasks[0].id, props.globalState.contest.tasks[0].task_type.name)

    return (
        <div>
            {
                props.globalState.contest.tasks[0].task_type.name === "Задание" ?
                    <Redirect from='/0/task/ok' to={`/0/task/${props.globalState.contest.tasks[0].id}`} />
                    :
                    <Redirect from='/0/task/ok' to={`/0/info/${props.globalState.contest.tasks[0].id}`} />

            }
            <MainRender
                globalState={props.globalState}
                globalActions={props.globalActions} />
        </div>
    );

}
export default MainHandler;
