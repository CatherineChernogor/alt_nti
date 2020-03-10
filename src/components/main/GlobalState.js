import React from 'react';
import globalHook from 'use-global-hook';
import { sendGet } from '../../modules/Requests';

const initialState = {
    contest: '',
    notifications: '',
    tasks: '',
    answers: '',
};

const actions = {
    updateContest: async (store) => {
        let contest = await sendGet("contest/");
        const newContestValue = await contest;
        store.setState({ contest: newContestValue });
    },
    updateNotifications: async (store) => {
        let notifications = sendGet("notification/");
        const newNotificationsValue = await notifications;
        store.setState({ notifications: newNotificationsValue });
    },
    updateTasks: async (store) => {
        let tasks = await sendGet("task/");
        const newTasksValue = await tasks;
        store.setState({ tasks: newTasksValue });
    },
    updateAnswers: async (store) => {
        let answers = await sendGet("answer/");
        const newAnswersValue = await answers;
        store.setState({ answers: newAnswersValue });
    },
};

export const useGlobal = globalHook(React, initialState, actions);