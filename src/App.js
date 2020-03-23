import './App.css';
import './components/main/main.css';

import React, { useEffect } from 'react';
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { useGlobal } from './components/main/GlobalState';


import Auth from './components/auth/AuthHandler';
import Main from './components/main/MainHandler';
import Header from './components/main/Header';//hooks
import Footer from './components/main/Footer';//hooks
import Loader from './components/preloader/Loader';
//import Game from './components/game/gameClass';

const App = () => {

    let [globalState, globalActions] = useGlobal();

    useEffect(() => {
        if (globalState.isAuth || globalState.isToken) {
            if (globalState.isUpdated) {
                setInterval(() => {
                    loadData(globalActions);
                    console.log("rererender")
                }, 60000)
            } else {
                loadData(globalActions);
                globalActions.setIsUpdated(true);
            }
        }
    }, [
        globalState.isAuth,
        globalState.isToken,
        globalActions
    ]);

    return (
        <div className="App">
            <Header />
            <div className="content-page">
                <BrowserRouter>
                    <Redirect to='/auth' from="/alt_nti" />
                    <Route
                        path='/0/loader'
                        render={() =>
                            <Loader isLoaded={globalState.isLoaded} />
                        } />
                    <Route
                        path='/auth'
                        render={() =>
                            <Auth
                                isAuth={globalState.isAuth}
                                isLoaded={globalState.isLoaded}
                                isToken={globalState.isToken}
                                globalActions={globalActions} />
                        } />
                    <Route
                        path='/0'
                        render={() =>
                            <Main
                                globalState={globalState}
                                globalActions={globalActions} />
                        } />

                    {/*<Route path='/game' render={() => <Game />} />*/}
                </BrowserRouter>
            </div>
            <Footer />
        </div >
    );
}

export default App;



let loadData = async (action) => {

    var p1 = action.updateContest()
        .then(function (value) {
            return value
        });
    var p2 = action.updateTasks()
        .then(function (value) {
            return value
        });
    var p3 = action.updateAnswers()
        .then(function (value) {
            return value
        });
    var p4 = action.updateNotifications()
        .then(function (value) {
            return value
        });

    Promise.all([p1, p2, p3, p4]).then(val => {

        if (val[0] && val[1] && val[2] && val[3])
            action.setIsLoaded(true)
    })
};