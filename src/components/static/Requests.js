export let state = {
  server: "http://139.162.141.55:8000",
  token: "false",
  auth: {
    username: "",
    password: ""
  },
  tasks: {
    "data": [
      {
        "id": 1,
        "task": {
          "id": 1,
          "task_block": 1,
          "task_type": 1,
          "title": "Задание 1",
          "text": "Имеются изображения маркеров 8 типов. Задача - написать классификатор маркеров, который по одному изображению говорит его id и разворот относительно оригинального изображения. Для получения оригинальных изображений и их id следует отправить запрос на сервер с коммандо get_omarkers Для получения маркеров со стенда, которые следует распознать нужно отправить запрос на сервер get_merkerks",
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
        "progress": 24
      }
    ]
  },
  contest: {
    "data": [
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
    ]
  },
  answers: {
    "data": [
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
    ]
  },
  notifications: {
    "data": [
      {
        "id": 1,
        "title": "Сообщение 1",
        "text": "Всем переделать задание 2"
      },
      {
        "id": 2,
        "title": "Сообщение 2",
        "text": "Всем переделать задание 3"
      }
    ]
  },
  //markers: {}
}

export let sendGet = async (path) => {
  let response = await fetch(`${state.server}/api/0/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Token ' + sessionStorage.token
    },
  });

  if (response.ok) {
    let result = await response.json();
    console.log(result);

  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}



export let sendPost = async (path, data) => {

  let response = await fetch(`${state.server}/api/0/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
  let result = await response.json();

  if (typeof result['key'] !== 'undefined') {
    sessionStorage.setItem('token', result['key']);
    return (result['key']);
  }
  else {
    sessionStorage.setItem('token', false);
    return false;
  }
}



/*
export let Get = (path) => {
  let request = new XMLHttpRequest();
  request.responseType = 'json';
  request.open("GET", `${state.server}/api/0/${path}`);
  request.setRequestHeader('content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'Token ' + sessionStorage.token);
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let answ = request.response;
      if (path === "task/") state.tasks = answ;
      else if (path === "contest/") state.contest = answ;
      else if (path === "notification/") state.notifications = answ;
      //else if (path ==="marker/") state.markers=answ;
      else if (path === "answer/") state.answers = answ;
      console.log("true1", state);

    }
  });
  request.send();
}

export let Post = (path, data) => {

  let request = new XMLHttpRequest();
  request.responseType = 'json';
  request.open("POST", `${state.server}/api/0/${path}`);
  request.setRequestHeader('content-Type', 'application/json');
  request.send(JSON.stringify(data));
  request.addEventListener("readystatechange", () => {

    if (request.readyState === 4 && request.status === 200) {

      let token = request.response.key;
      sessionStorage.setItem('token', token);
      console.log(token);
      return token;

    } else {
      //alert("try again");
      sessionStorage.setItem('token', false);
      return false;
    }
  });


}*/