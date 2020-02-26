import '../../App.css';
import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import NavMenu from './fGround_comp/NavMenu';
import Chat from './fGround_comp/Chat';
import Points from './fGround_comp/Points';
import Notification from './fGround_comp/Notification';

import Task from '../low_gen/Task';
import Info from '../low_gen/Info';


class Main extends React.Component {


  handler =()=>{
    this.props.sendGet("marker/");
    
  }

  render() {

    this.handler();
    let task = [
      {
        "id": 1,
        "task": {
          "id": 1,
          "task_block": 1,
          "task_type": 1,
          "title": "Задание 1",
          "text": "Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1",
          "points": 45
        },
        "progress": 0
      },
      {
        "id": 2,
        "task": {
          "id": 2,
          "task_block": 1,
          "task_type": 1,
          "title": "Задание 2",
          "text": "Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2",
          "points": 35
        },
        "progress": 0
      },
      {
        "id": 3,
        "task": {
          "id": 3,
          "task_block": 1,
          "task_type": 1,
          "title": "Задание 3",
          "text": "Задание 3Задание 3Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2",
          "points": 35
        },
        "progress": 0
      },
      {
        "id": 4,
        "task": {
          "id": 4,
          "task_block": 1,
          "task_type": 2,
          "title": "инфрмация 1",
          "text": "инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1инфрмация 1",
          "points": 35
        },
        "progress": 0
      }
    ]


    let routeArray = task.map(
      (el) =>
        el.task.task_type == 1 ?
          <Route
            exact path={'/task/' + el.id}
            render={() => <Task title={el.task.title} text={el.task.text} />} />
          : <Route
            exact path={'/info/' + el.id}
            render={() => <Info title={el.task.title} text={el.task.text} />} />
    );
    return (
      <div>
        <BrowserRouter>
          <NavMenu />
          <Chat />
          <Notification />
          <div className="content main">
            <Points />
            {routeArray}

            <Route path='/0/task' render={() => <Task title="1" text="1" />} />
            <Route exact path='/0/info' component={Info} />
          </div>
        </BrowserRouter >
      </div>
    );
  }
}

export default Main;
