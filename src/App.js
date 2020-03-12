import './App.css';
import './components/main/main.css';

import React from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { useGlobal } from './components/main/GlobalState';


import Auth from './components/auth/AuthFun';
import Main from './components/main/MainFun';
import Header from './components/main/Header';//hooks
import Footer from './components/main/Footer';//hooks
import Loader from './components/preloader/LoaderFun';

const App = () => {

    const [globalState, globalActions] = useGlobal();

    return (
        <div className="App">
            <Header />
            <div className="content-page">
                <BrowserRouter>
                    <Redirect to='/0/task/1' from="/alt_nti" />
                    <Route
                        path='/loader'
                        render={() =>
                            <Loader globalState={globalState} globalActions={globalActions} />
                        } />
                    <Route
                        path='/auth'
                        render={() =>
                            <Auth isAuth={globalState.isAuth} globalActions={globalActions} />
                        } />
                    <Route
                        path='/0'
                        render={() =>
                            <Main globalState={globalState} globalActions={globalActions} />
                        } />
                </BrowserRouter>
            </div>
            <Footer />
        </div >
    );
}

export default App;
