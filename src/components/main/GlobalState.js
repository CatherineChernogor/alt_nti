import React from 'react';
import globalHook from 'use-global-hook';
import { sendGet } from '../../modules/Requests';

const initialState = {
    contest: "",
    tasks: "",
    notifications: "",
    answers: "",
    isUpdated: false,
    isLoaded: false,
    isAuth: null,
    isToken: false,
    response: "",
};

const actions = {
    updateContest: async (store) => {
        const newValue = await sendGet("contest/");
        store.setState({ contest: newValue.data[0] });
        if (newValue !== null && typeof newValue !== undefined)
            return true
        else
            return false
    },
    updateNotifications: async (store) => {
        let newValue = await sendGet("notification/");
        store.setState({ notifications: newValue.data });
        if (newValue !== null && typeof newValue !== undefined)
            return true
        else
            return false
    },
    updateTasks: async (store) => {
        let newValue = await sendGet("task/");
        store.setState({ tasks: newValue.data });
        if (newValue !== null && typeof newValue !== undefined)
            return true
        else
            return false
    },
    updateAnswers: async (store) => {
        let newValue = await sendGet("answer/");
        store.setState({ answers: newValue.data });
        if (newValue !== null && typeof newValue !== undefined)
            return true
        else
            return false
    },

    setIsLoaded: (store, value) => {
        store.setState({ isLoaded: value });
    },
    setIsUpdated: (store, value) => {
        store.setState({ isUpdated: value });
    },
    setIsAuth: (store, value) => {
        store.setState({ isAuth: value });
    },
    setIsToken: (store, value) => {
        store.setState({ isToken: value });
    },
    setResponse: (store, value) => {
        store.setState({ response: value });
    },
    
};

export const useGlobal = globalHook(React, initialState, actions);