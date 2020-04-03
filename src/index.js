import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ForMobile from './components/main/ForMobile';
import * as serviceWorker from './serviceWorker';

if (window.screen.availWidth >= 700 && window.screen.availHeight >= 700)
    ReactDOM.render(<App />, document.getElementById('root'));
else
    ReactDOM.render(<ForMobile />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();