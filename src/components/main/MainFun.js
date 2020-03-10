import '../../App.css';
import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import {useGlobal} from './GlobalState';

import NavMenu from '../small/navigation/NavMenuFun';//hooks
import Chat from '../small/chat/ChatFun';//hooks
import Points from '../small/points/Points';//hooks
import Notification from '../small/NotificationFun';//hooks

import Task from '../task/Task';//hooks
import Info from './Info';//hooks

const Main = (props) => {

  const [globalState, globalActions] = useGlobal();

  useEffect(() => {


  }, [])

  
  return (
    <div>
      <BrowserRouter>
        <NavMenu />
        <Chat />
        <Notification />
        <div className="content main">
          <Points />

          <RenderTasks tasks={globalState.tasks} />
          {/*<Route path='/0/task' component={Task} />*/}
          <Route path='/0/info' component={Info} />
        </div>
      </BrowserRouter >
    </div>
  );

}
export default Main;



const RenderTasks = (props) => {

  let tasks = props.tasks.map(//props.tasks
    (el) =>
      el.task_type === 1 ?
        <Route
          exact path={'/0/task/' + el.id}
          render={() => <Task title={el.title} text={el.text} id={el.id} points={el.points} />} />
        : <Route
          exact path={'/0/info/' + el.id}
          render={() => <Info title={el.title} text={el.text} />} />
  );
  return tasks;
}

