import './App.css';
import './components/main/main.css';
import React from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Loader from './components/preloader/Loading';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      server: "http://139.162.141.55:8000",
      token: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-page">
          <BrowserRouter>
            <Route
              path='/auth' render={() => <Auth />} />

            <Redirect to='/auth' from="/alt_nti" />

            <Route
              path='/loader' render={() => <Loader />} />

            <Route
              path='/0' render={() => <Main />} />
          </BrowserRouter>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;


