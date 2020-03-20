import Axios from "axios";

let server = "//api.arstand-lab.ru";

export function sendGet(path) {
  return Axios.get(`${server}/api/0/${path}`, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Token ' + sessionStorage.token
    }
  }).then((result) => {
    return result.data;
  });
}

export function sendPost(path, data) {
  const headers = {
    'Content-Type': 'application/json;charset=utf-8'
  };
  return Axios.post(`${server}/api/0/${path}`, data, {
    headers
  }).then((result) => {
    return result.data;
  });
}
