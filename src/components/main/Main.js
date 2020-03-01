import '../../App.css';
import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import NavMenu from '../small/navigation/NavMenu';
import Chat from '../small/chat/Chat';
import Points from '../small/points/Points';
import Notification from '../small/Notification';

import Task from '../task/Task';
import Info from '../main/Info';

import { sendGet } from '../../modules/Requests';



class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      status: false,
      isUpdated: false
    };
  }
  handler = async () => {
    let timer = await sendGet("contest/");
    let answer = await sendGet("answer/");
    sendGet("task/");
    sendGet("notification/");
    console.log("update", timer, answer);
    this.setState({ isUpdated: true });
  }

  renderTasks = () => {
    let contest = JSON.parse(localStorage.getItem("contest"));
    let tasks = contest[0].tasks;
    let routeArray = tasks.map(
      (el) =>
        el.task_type === 1 ?
          <Route
            exact path={'/0/task/' + el.id}
            render={() => <Task title={el.title} text={el.text} id={el.id}/>} />
          : <Route
            exact path={'/0/info/' + el.id}
            render={() => <Info title={el.title} text={el.text} />} />
    );
    return routeArray;
  }

  componentDidMount() {


    this.update = setInterval(() => {
      this.handler();
      this.setState({ isUpdated: false })
    }, 10000);
  }
componentWillUnmount(){
  clearInterval(this.update);
}

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavMenu />
          <Chat />
          <Notification />
          <div className="content main">
            <Points />

            {this.renderTasks()}
            {/*<Route path='/0/task' component={Task} />*/}
            <Route path='/0/info' component={Info} />
          </div>
        </BrowserRouter >
      </div>
    );
  }
}

export default Main;
