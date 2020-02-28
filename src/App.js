import './App.css';
import './style/high_gen.css';
import React from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import Auth from './components/high_gen/Auth';
import Main from './components/high_gen/Main';
import Header from './components/high_gen/Header';
import Footer from './components/high_gen/Footer';

import AuthEx from './components/high_gen/ProAuth';
import { state } from './components/static/Requests';

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
              path='/auth'
              render={() =>
                <Auth sendPost={this.props.sendPost} state={state}/>} />

            <Redirect to='/auth' from = "/alt_nti"/>
            <Route
              path='/0'
              render={() =>
                <Main state={state} sendGet={this.props.sendGet}/>} />
          </BrowserRouter>
        </div>
              <Footer />
      </div >
    );
  }
}

export default App;


