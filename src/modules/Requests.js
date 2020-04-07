import Axios from "axios";

let server = "https://api.arstand-lab.ru";
let server_502 = "https://api.arstand-lab.ru/api/502/";
let server_500 = "https://api.arstand-lab.ru/api/500/";


export function sendGet(path) {
    return Axios.get(`${server}/api/0/${path}`, {
    //return Axios.get(server_500 + path, {

        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Token ' + sessionStorage.token
        }
    }).then((result) => {
        return result.data;
    }).catch((error) => {
        console.log("get error", error.response.status);
    })
}



export function sendPost(path, data) {

    return Axios.post(`${server}/api/0/${path}`, data, {
    //return Axios.post(server_500 + path, data, {
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(
        (result) => {
            return {
                status: result.status,
                data: result.data,
            }
        })
        .catch((error) => {
            console.log("post error ",error.response.status);
            if (typeof error.response !== typeof undefined)
                return {
                    status: error.response.status,
                    data: error.response,
                }
            else return {
                status: 420,
                data: "check internet",
            }
        });
}
