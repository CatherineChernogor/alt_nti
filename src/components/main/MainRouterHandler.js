import React from 'react';

import MainRender from './MainRender';
import { Redirect } from 'react-router-dom';

const MainHandler = (props) => {


    if (props.globalState.contest !== undefined) {

        if (props.globalState.contest.tasks.length !== 0)
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

        else {
            return (
                <div className="heading3 contest-error-message">
                    У вас не назначена ни одна задача, пожалуйста подождите или обратитесь к администратору
                </div>
            )
        }
    } else {
        return (
            <div className="heading3 contest-error-message">
                У вас не назначен контест, пожалуйста подождите или обратитесь к администратору
            </div>
        )
    }
}
export default MainHandler;
