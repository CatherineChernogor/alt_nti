import React from 'react';
import globalHook from 'use-global-hook';

const initialState = {

    bird: {
        x: 50,
        y: 100,
        radius: 20
    },
    isUpdated: false,
    isLoaded: false,
    isAuth: null,
   
};

const actions = {
   
    setIsLoaded: (store, value) => {
        store.setState({ isLoaded: value });
    },
    setIsUpdated: (store, value) => {
        store.setState({ isUpdated: value });
    },
    setIsAuth: (store, value) => {
        store.setState({ isAuth: value });
    },
};

export const useGlobal = globalHook(React, initialState, actions);