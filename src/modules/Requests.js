import Axios from "axios";

let server = "http://192.168.43.84:8000";

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

// export let sendGet = async (path) => {
//   let response = await fetch(`${server}/api/0/${path}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//       'Authorization': 'Token ' + sessionStorage.token
//     },
//   });

//   if (response.ok) {
//     let result = await response.json();
//     return result.data;
//   } else {
//     alert("Ошибка HTTP: " + response.status);
//   }

// }


// export let sendPost = async (path, data) => {
//   //const mock_path = "http://www.mocky.io/v2/5e688e222f0000975bd8ad5c"
//   console.log("startpost")

//   let response = await fetch(`${server}/api/0/${path}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(data)
//   });
//   let result = await response.json();
//   console.log("recieved", result);

//   if (typeof result['key'] !== 'undefined') {
//     sessionStorage.setItem('token', result['key']);
//     return (result['key']);
//   }
//   else {
//     sessionStorage.setItem('token', false);
//     return false;
//   }
// }
