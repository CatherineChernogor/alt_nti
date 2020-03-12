
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
const mock_path = "http://www.mocky.io/v2/5e688e222f0000975bd8ad5c"
  //let response = await fetch(`${server}/api/0/${path}`, {
    let response = await fetch(mock_path, {  
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
