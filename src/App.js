import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import NavMenu from './components/NavMenu';
import Notification from './components/Notification';
import Chat from './components/Chat';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Header />
      <Notification />
      <NavMenu />
      <Chat />
      <Main />
      <Footer />
    </div>
  );

}

export default App;
