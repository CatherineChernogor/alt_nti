import '../../App.css';
import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import NavMenu from './fGround_comp/NavMenu';
import Chat from './fGround_comp/Chat';
import Points from './fGround_comp/Points';
import Notification from './fGround_comp/Notification';

import Task from '../low_gen/Task';
import Info from '../low_gen/Info';

import { sendGet } from '../static/Requests';



class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      status: false
    };
  }
  handler = async () => {
    let timer = await sendGet("contest/");
    sendGet("answer/");

    sendGet("task/");
    sendGet("notification/");
    console.log(timer);

  }

  renderTasks = () => {
    let contest = JSON.parse(localStorage.getItem("contest"));
    let tasks = contest[0].tasks;
    let routeArray = tasks.map(
      (el) =>
        el.task_type === 1 ?
          <Route
            exact path={'/0/task/' + el.id}
            render={() => <Task title={el.title} text={el.text} />} />
          : <Route
            exact path={'/0/info/' + el.id}
            render={() => <Info title={el.title} text={el.text} />} />
    );
    return routeArray;
  }
  render() {
    this.handler();

    return (
      <div>
        <BrowserRouter>
          <NavMenu />
          <Chat />
          <Notification />
          <div className="content main">
            <Points />

            {this.renderTasks()}
            <Route path='/0/task' component={Task} />
            <Route path='/0/info' component={Info} />
          </div>
        </BrowserRouter >
      </div>
    );
  }
}

export default Main;
