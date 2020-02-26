let state = {
  server:  "http://139.162.141.55:8000",
  token: "",
  auth: {
    username: "",
    password: ""
  },
  tasks:{},
  contest: {},
  answer:{},
  notification: {}
}
export default state;

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
      console.log(state.token);
      request.setRequestHeader('Authorization', 'Token ' + token);
      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          console.log(request.response);
        }
      });
      request.send();

    } else if (method === "POST") {
      request.send(JSON.stringify(data));
      request.onload = () => {
        console.log(request.response);
        state.token =  request.response['key'];
      };
    }
  }


