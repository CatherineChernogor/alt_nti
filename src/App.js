import './App.css';
import './components/main/main.css';

import React from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Auth from './components/auth/Auth';
import Main from './components/main/MainFun';
import Header from './components/main/Header';//hooks
import Footer from './components/main/Footer';//hooks
import Loader from './components/preloader/LoaderFun';

const App = () =>{

  return (
    <div className="App">
      <Header />
      <div className="content-page">
        <BrowserRouter>

          <Redirect to='/loader' from="/alt_nti" />{/* <Redirect to='/auth' from="/alt_nti" />*/}

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
