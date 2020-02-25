import './App.css';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import Task from './components/page/Task';
import NavMenu from './components/NavMenu';
import Notification from './components/Notification';
import Chat from './components/Chat';

import Info from './components/page/Info';
import Main from './components/page/Main';

import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";


class App extends Component {



  render() {

    let data = [
      {
        id: 1, type: "task",
        title: "Класификатор маркеров",
        text: "Имеются изображения маркеров 8 типов. Задача - написать классификатор маркеров, который по одному изображению говорит его id и разворот относительно оригинального изображения.' + '<br></br>' + 'Для получения оригинальных изображений и их id следует отправить запрос на сервер с коммандо get_omarkers Для получения маркеров со стенда, которые следует распознать нужно отправить запрос на сервер get_merkerks Для проверки реализованного классификатора нужно сначала обратиться к серверу для получения маркеров расположенных на стенде, затем отправить запрос на проверку с командой check, в котором нужно передать массив типа [(id, x, y, r),...]. ",
        table: {
          line1: {
            time: "15:24",
            date: "23.09.3434",
            message: " work time 23s",
            points: '34/100'
          },
          line2: {
            time: "15:24",
            date: "23.09.3434",
            message: " work time 23s",
            points: '34/100'
          },
          line3: {
            time: "15:24",
            date: "23.09.3434",
            message: " work time 23s",
            points: '34/100'
          },
        },
      },
      {
        id: 2, type: "task",
        title: "  Задача 2",
        text: "  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2  Задача 2"
        , table: {
          line1: {
            time: "",
            date: "",
            message: "",
            points: ''
          },
        },
      }
      ,
      {
        id: 3, type: "task",
        title: " Задача 3",
        text: " Задача 3 Задача 3 Задача 3 Задача 3 Задача 3 Задача 3 Задача 3 Задача 3 Задача 3 Задача 3 Задача 3 Задача 3 Задача 3"
        , table: {
          line1: {
            time: "",
            date: "",
            message: "",
            points: ''
          },
        },
      }
      ,
      {
        id: 10, type: "info",
        title: " Info 1",
        text: "  Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1 Info 1"
      }
      ,
      {
        id: 4, type: "task",
        title: " Задача 4",
        text: " Задача 4 Задача 4 Задача 4 Задача 4 Задача 4 Задача 4 Задача 4 Задача 4 Задача 4 Задача 4 Задача 4 Задача 4 Задача 4"
        , table: {
          line1: {
            time: "",
            date: "",
            message: "",
            points: ''
          },
        },
      }
      ,
      {
        id: 5, type: "task",
        title: " Задача 5",
        text: " Задача 5 Задача 5 Задача 5 Задача 5 Задача 5 Задача 5 Задача 5 Задача 5 Задача 5 Задача 5 Задача 5 Задача 5 Задача 5"
        , table: {
          line1: {
            time: "",
            date: "",
            message: "",
            points: ''
          },
        },
      }
      , {
        id: 6, type: "task",
        title: " Задача 6",
        text: " Задача 6 Задача 6 Задача 6 Задача 6 Задача 6 Задача 6 Задача 6 Задача 6 Задача 6 Задача 6 Задача 6 Задача 6 Задача 6"
        , table: {
          line1: {
            time: "",
            date: "",
            message: "",
            points: ''
          },
        },
      }
      ,
      {
        id: 11, type: "info",
        title: " Info 92",
        text: "  Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2 Info 2"
      }
      ,
      {
        id: 7, type: "task",
        title: "Задача 7",
        text: "Задача 7Задача 7Задача 7 Задача 7 Задача 7 Задача 7 Задача 7 Задача 7 Задача 7 Задача 7 Задача 7 Задача 7 Задача 7 "
        , table: {
          line1: {
            time: "",
            date: "",
            message: "",
            points: ''
          },
        },
      }
      ,
      {
        id: 8, type: "task",
        title: "Задача 8",
        text: "Задача 8Задача 8Задача 8Задача 8Задача 8Задача 8Задача 8Задача 8Задача 8Задача 8Задача 8Задача 8Задача 8"
        , table: {
          line1: {
            time: "",
            date: "",
            message: "",
            points: ''
          },
        },
      }
      , {
        id: 9, type: "task",
        title: "Задача 9 ",
        text: "Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 Задача 9 "
        , table: {
          line1: {
            time: "",
            date: "",
            message: "",
            points: ''
          },
        },
      }
      , {
        id: 12, type: "info",
        title: " Info 3",
        text: "  Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3 Info 3"
      }
      ,


    ]

    let routeArray = data.map(
      (el) =>
        el.type == 'task' ?
          <Route
            exact path={'/' + el.type + '/' + el.id}
            render={() => <Task title={el.title} text={el.text} />} />
          : <Route
            exact path={'/' + el.type + '/' + el.id}
            render={() => <Info title={el.title} text={el.text} />} />

    );
    return (
      <BrowserRouter>
        <div className="App">
          <NavMenu />

          <div className='page'>
            <Header />
            <div className="content">
              {routeArray}
              <Route exact path='/alt_nti' component={Main} />
              <Route exact path='/' component={Main} />
            </div>
            <Footer />
          </div>
          <Notification />
          <Chat />
        </div>
      </BrowserRouter >

    );
  }
}

export default App;
