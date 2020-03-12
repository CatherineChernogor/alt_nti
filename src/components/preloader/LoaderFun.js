import React, { useEffect } from 'react';
import './preloader.scss';
import { Redirect } from 'react-router-dom';

const Loader = (props) => {

    useEffect(() => {
        setInterval(
            () => {

                props.globalActions.updateContest();
                props.globalActions.updateTasks();
                props.globalActions.updateAnswers();
                props.globalActions.updateNotifications();
                props.globalActions.setIsLoaded(true);
            }, 10000);

    }, [props.globalState.isLoaded, props.globalState.contest, props.globalState.tasks, props.globalState.answers, props.globalState.notifications])


    return (
        <div>
            {console.log(props.globalState.isLoaded)}
            {props.globalState.isLoaded ?
                    <Redirect to="/0/task/1" from="/loader" />
                    : <Animation />}

        </div>
    );
}
export default Loader;


const Animation = () => {
    return (
        <div className="container">
            <div className="item-1"><div></div></div>
            <div className="item-2"><div></div></div>
            <div className="item-3"><div></div></div>
            <div className="item-4"><div></div></div>
            <div className="item-5"><div></div></div>
            <div className="item-6"><div></div></div>
            <div className="item-7"><div></div></div>
            <div className="item-8"><div></div></div>
            <div className="item-9"><div></div></div>
        </div>

    );
}
