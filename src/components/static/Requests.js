export let state = {
  server: "http://139.162.141.55:8000",
  token: "41cad6a8e57793becafa1b4037ac7d10f941634e",
  auth: {
    username: "user",
    password: "AdobeFlash"
  },
  tasks: {"data": [
    {
        "id": 1,
        "task": {
            "id": 1,
            "task_block": 1,
            "task_type": 1,
            "title": "Задание 1",
            "text": "Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1",
            "points": 45
        },
        "progress": 0
    },
    {
        "id": 2,
        "task": {
            "id": 2,
            "task_block": 1,
            "task_type": 1,
            "title": "Задание 2",
            "text": "Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2",
            "points": 35
        },
        "progress": 0
    }
]},
  contest: { "data": [
    {
        "id": 1,
        "name": "TestContest",
        "duration": "00:06:00",
        "date_start": "2020-02-24T09:42:39Z",
        "tasks": [
            {
                "id": 1,
                "task_block": 1,
                "task_type": 1,
                "title": "Задание 1",
                "text": "Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1Задание 1",
                "points": 45
            },
            {
                "id": 2,
                "task_block": 1,
                "task_type": 1,
                "title": "Задание 2",
                "text": "Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2Задание 2",
                "points": 35
            }
        ]
    }
]},
  answers: {"data": [
    {
        "id": 1,
        "result": 24,
        "data": "TimeWork - 24sec",
        "date_send": "2020-02-24T09:58:48.004527Z",
        "error": null
    },
    {
        "id": 2,
        "result": -1,
        "data": null,
        "date_send": "2020-02-24T09:59:58.346551Z",
        "error": "Wrong Format"
    }
]},
  notifications: {},
  markers: {}
}

export let sendGet = (path) => {
  sendRequest("GET", path, "", state.token);
}

export let sendPost = (path, data) => {
  sendRequest("POST", path, data, "");
}

let sendRequest = (method, path, data, token) => {
  let request = new XMLHttpRequest();
  request.responseType = 'json';
  request.open(method, `${state.server}/api/0/${path}`);
  request.setRequestHeader('content-Type', 'application/json');

  if (method === "GET") {
    //console.log("token before get", state.token);
    request.setRequestHeader('Authorization', 'Token ' + token);
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        let answ = request.response;
        if (path ==="task/") state.tasks=answ;
        else if (path ==="contest/") state.contest=answ;
        else if (path ==="notification/") state.notifications=answ;
        else if (path ==="marker/") state.markers=answ;
        else if (path ==="answer/") state.answers=answ;
        //console.log("true1", state);

      }
    });
    request.send();

  } else if (method === "POST") {
    request.send(JSON.stringify(data));
    request.onload = () => {
      //console.log("true2", request.response);

      if (request.response['key']) {
        state.token = request.response['key'];
        //console.log(state.token);
      } else { 
        state.token = false; 
      }
    };
  }
}


