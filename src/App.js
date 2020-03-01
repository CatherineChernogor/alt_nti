import './App.css';
import './components/main/main.css';

import React from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Loader from './components/preloader/Loading';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content-page">
        <BrowserRouter>

          <Redirect to='/auth' from="/alt_nti" />

          <Route path='/loader' component={Loader} />
          <Route path='/auth' component={Auth} />
          <Route path='/0' component={Main} />
        </BrowserRouter>
      </div>
      <Footer />
    </div >
  );
}

export default App;
