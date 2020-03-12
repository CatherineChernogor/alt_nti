import React from 'react';
import globalHook from 'use-global-hook';
import { sendGet } from '../../modules/Requests';

const initialState = {
    contest: [
        {
            "id": 1,
            "name": "TestContest",
            "duration": "24 00:00:00",
            "date_start": "2020-02-27T15:24:24Z",
            "tasks": [
                {
                    "id": 1,
                    "task_block": 1,
                    "task_type": 1,
                    "title": "Проверка маркеров",
                    "text": "Проверка маркеровПроверка маркеровПроверка маркеровПроверка маркеровПроверка маркеров",
                    "points": 50
                },
                {
                    "id": 2,
                    "task_block": 2,
                    "task_type": 1,
                    "title": "Проверка маппинга",
                    "text": "Проверка маппингаПроверка маппингаПроверка маппингаПроверка маппингаПроверка маппингаПроверка маппинга",
                    "points": 60
                },
                {
                    "id": 3,
                    "task_block": 2,
                    "task_type": 1,
                    "title": "Отображение",
                    "text": "ОтображениеОтображениеОтображениеОтображениеОтображениеОтображение",
                    "points": 70
                }
            ]
        }
    ],
    notifications: [
        {
            "id": 1,
            "title": "Сообщение 1",
            "text": "Сообщение 1Сообщение 1Сообщение 1Сообщение 1Сообщение 1Сообщение 1Сообщение 1",
            "date_send": "2020-02-27T15:22:08.139367Z"
        },
        {
            "id": 2,
            "title": "Сообщение 2",
            "text": "Сообщение 2Сообщение 2Сообщение 2Сообщение 2Сообщение 2Сообщение 2",
            "date_send": "2020-02-27T15:22:08.139367Z"
        }
    ],
    tasks: [
        {
            "id": 1,
            "task": {
                "id": 1,
                "task_block": 1,
                "task_type": 1,
                "title": "Проверка маркеров",
                "text": "Проверка маркеровПроверка маркеровПроверка маркеровПроверка маркеровПроверка маркеров",
                "points": 50
            },
            "progress": 100
        },
        {
            "id": 2,
            "task": {
                "id": 2,
                "task_block": 2,
                "task_type": 1,
                "title": "Проверка маппинга",
                "text": "Проверка маппингаПроверка маппингаПроверка маппингаПроверка маппингаПроверка маппингаПроверка маппинга",
                "points": 60
            },
            "progress": 0
        },
        {
            "id": 3,
            "task": {
                "id": 3,
                "task_block": 2,
                "task_type": 1,
                "title": "Отображение",
                "text": "ОтображениеОтображениеОтображениеОтображениеОтображениеОтображение",
                "points": 70
            },
            "progress": 0
        }
    ],
    answers: [
        {
            "id": 1,
            "result": 100,
            "data": "WorkTime - 24sec",
            "date_send": "2020-02-24T16:41:31.460503Z",
            "error": null,
            "user_task": 1
        },
        {
            "id": 2,
            "result": 100,
            "data": "WorkTime - 24sec",
            "date_send": "2020-02-28T11:40:44.111932Z",
            "error": null,
            "user_task": 1
        },
        {
            "id": 3,
            "result": 0,
            "data": "WorkTime - 24sec",
            "date_send": "2020-02-28T11:41:02.491439Z",
            "error": null,
            "user_task": 1
        },
        {
            "id": 4,
            "result": 50,
            "data": "WorkTime - 24sec",
            "date_send": "2020-02-28T11:41:15.528315Z",
            "error": null,
            "user_task": 1
        },
        {
            "id": 5,
            "result": null,
            "data": null,
            "date_send": "2020-02-28T11:41:26.555297Z",
            "error": "do not have markers key",
            "user_task": 1
        }
    ],
    isUpdated: false,
    isLoaded: false,
    isAuth: null,
   
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