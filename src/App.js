import './App.css';
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import Task from './components/page/Task';
import NavMenu from './components/NavMenu';
import Notification from './components/Notification';
import Chat from './components/Chat';

import Info from './components/page/Info';
import Auth from './Auth';
import Main from './components/page/Main';

import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App"> 
        <NavMenu />

          <div className='page'>
            <Header />
            <div className="content">
              <Route exact path='/task/1' component={Task} />
              <Route exact path='/info/1' component={Info} />
              <Route exact path='/alt_nti' component={Main} />
              <Route exact path='/' component={Main} />
                            
              
            </div>
            <Footer />
          </div>
          <Notification />
          <Chat />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
