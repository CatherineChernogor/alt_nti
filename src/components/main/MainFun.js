import '../../App.css';
import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

import NavMenu from '../small/navigation/NavMenuFun';//hooks
import Chat from '../small/chat/ChatFun';//hooks
import Points from '../small/points/Points';//hooks
import Notification from '../small/NotificationFun';//hooks
import RenderTasks from '../task/RenderTasks';//hooks

const Main = (props) => {


    useEffect(() => {
        setInterval(
            async () => {

                props.globalActions.updateContest();
                props.globalActions.updateTasks();
                props.globalActions.updateAnswers();
                props.globalActions.updateNotifications();
                props.globalActions.setIsUpdated(true);
            }, 10000);
        props.globalActions.setIsUpdated(false);

    }, [props.globalState.contest, props.globalState.tasks, props.globalState.answers, props.globalState.notifications, props.globalState.IsUpdated])


    return (
        <div>
            <BrowserRouter>
                <NavMenu globalState={props.globalState} />
                <Chat globalState={props.globalState} />
                <Notification />
                <div className="content main">
                    <Points globalState={props.globalState} />
                    <RenderTasks tasks={props.globalState.tasks} globalState={props.globalState}/>
                </div>
            </BrowserRouter >
        </div>
    );

}
export default Main;
