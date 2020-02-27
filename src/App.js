import './App.css';
import './style/high_gen.css';
import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";

import Auth from './components/high_gen/Auth';
import Main from './components/high_gen/Main';
import Header from './components/high_gen/Header';
import Footer from './components/high_gen/Footer';

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
              exact path='/auth'
              render={() =>
                <Auth sendPost={this.props.sendPost} />} />
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





/*
  sendRequest = (method, path, data) => {
    let request = new XMLHttpRequest();
    request.responseType = 'json';
    request.open(method, `${this.state.server}/api/0/${path}`);
    request.setRequestHeader('content-Type', 'application/json');

    if (method === "GET") {
      console.log(this.state.token);
      request.setRequestHeader('Authorization', 'Token ' + this.state.token);
      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          console.log(request.response);
          return request;
        }
      });
      request.send();

    } else if (method === "POST") {
      request.send(JSON.stringify(data));
      request.onload = () => {
        console.log(request.response);
        this.setState({ token: request.response['key'] });
      };
    }
  }

  sendGet = (path) => {
    this.sendRequest("GET", path, "");
  }

  sendPost = (path, data) => {
    this.sendRequest("POST", path, data);
  }
*/