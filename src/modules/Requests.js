
let server = "http://139.162.141.55:8000";

export let sendGet = async (path) => {
  let response = await fetch(`${server}/api/0/${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Token ' + sessionStorage.token
    },
  });

  if (response.ok) {
    let result = await response.json();

    if (path === "task/") localStorage.setItem("task", JSON.stringify(result.data));
    else if (path === "contest/") localStorage.setItem("contest", JSON.stringify(result.data));
    else if (path === "notification/") localStorage.setItem("notifications", JSON.stringify(result.data));
    else if (path === "answer/") { 
      localStorage.setItem("answers", JSON.stringify(result.data)); 
    }

    return result.data;
  } else {
    alert("Ошибка HTTP: " + response.status);
  }

}



export let sendPost = async (path, data) => {

  let response = await fetch(`${server}/api/0/${path}`, {
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