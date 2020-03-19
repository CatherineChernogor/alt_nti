import '../../App.css';
import React, { useEffect } from 'react';

import NavMenu from '../small/navigation/NavMenuFun';//hooks
import Chat from '../small/chat/ChatFun';//hooks
import Points from '../small/points/Points';//hooks
import Notification from '../small/NotificationFun';//hooks
import RenderTasks from '../task/RenderTasks';//hooks
import Loader from '../preloader/LoaderFun';


const Main = (props) => {

    useEffect(() => {
        if (props.globalState.isAuth) {

            if (!props.globalState.isLoaded) loadData(props);

            //setInterval(() => {
                //updateData(props)
                //console.log("rerender")

            //}, 10000)
            props.globalActions.setIsUpdated(false);

            //console.log(props.globalState.contest, props.globalState.tasks, props.globalState.answers, props.globalState.notifications)
        }
    }, [
        props.globalActions,
        props.globalState.isUpdated,
        props.globalState.isLoaded,
        props.globalState.isAuth,
    ])

    return (
        <div>
            {
                props.globalState.isLoaded ?
                    <div>
                        <NavMenu globalState={props.globalState} />
                        <Chat globalState={props.globalState} />
                        <Notification />
                        <div className="content main">

                            <Points globalState={props.globalState} />
                            <RenderTasks tasks={props.globalState.tasks} globalState={props.globalState} />
                        </div>
                    </div>
                    : <Loader globalState={props.globalState} />
            }
        </div>
    );

}
export default Main;

let loadData = async (props) => {

    var p1 = props.globalActions.updateContest().then(function (value) {
        return value
    });
    var p2 = props.globalActions.updateTasks().then(function (value) {
        return value
    });
    var p3 = props.globalActions.updateAnswers().then(function (value) {
        return value
    });
    var p4 = props.globalActions.updateNotifications().then(function (value) {
        return value
    });

    Promise.all([p1, p2, p3, p4]).then(val => {
        //console.log(val);
        if (val[0] && val[1] && val[2] && val[3])
            props.globalActions.setIsLoaded(true)
    })
};

let updateData = async (props) => {

    var p1 = props.globalActions.updateContest().then(function (value) {
        return value
    });
    var p2 = props.globalActions.updateTasks().then(function (value) {
        return value
    });
    var p3 = props.globalActions.updateAnswers().then(function (value) {
        return value
    });
    var p4 = props.globalActions.updateNotifications().then(function (value) {
        return value
    });

    Promise.all([p1, p2, p3, p4]).then(val => {
        //console.log(val);
        if (val[0] && val[1] && val[2] && val[3])
            props.globalActions.setIsUpdated(true)
    })
};