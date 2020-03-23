import '../../App.css';
import React, { useEffect } from 'react';

import Loader from '../preloader/Loader';
import MainRender from './MainRender';

const MainHandler = (props) => {

    useEffect(() => {
        if (props.globalState.isAuth || props.globalState.isToken)
            loadData(props.globalActions);

    }, [
        props.globalState.isAuth,
        props.globalState.isToken,
        props.globalActions
    ]);

    //console.log(props.globalState.contest)

    return (
        props.globalState.isLoaded ?
            <MainRender
                globalState={props.globalState}
                globalActions={props.globalActions} />
            : <Loader isLoaded={props.globalState.isLoaded} />
    );

}
export default MainHandler;

let loadData = async (action) => {

    var p1 = action.updateContest()
        .then(function (value) {
            return value
        });
    var p2 = action.updateTasks()
        .then(function (value) {
            return value
        });
    var p3 = action.updateAnswers()
        .then(function (value) {
            return value
        });
    var p4 = action.updateNotifications()
        .then(function (value) {
            return value
        });
    //console.log("ps", p1, p2, p3, p4);

    Promise.all([p1, p2, p3, p4]).then(val => {
        //console.log("val", val);

        if (val[0] && val[1] && val[2] && val[3])
            action.setIsLoaded(true)
    })
};