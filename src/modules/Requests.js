import Axios from "axios";

let server = "//api.arstand-lab.ru";

export function sendGet(path) {
    return Axios.get(`${server}/api/0/${path}`, {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Token ' + sessionStorage.token
        }
    }).then((result) => {
        //console.log("ok", result.data);
        return result.data;
    }).catch((error) => {
        console.log("error", error.response);
    })
}

export function sendPost(path, data) {
    const headers = {
        'Content-Type': 'application/json;charset=utf-8'
    };
    return Axios.post(`${server}/api/0/${path}`, data, {
        headers
    }).then((result) => {

        return {
            status: result.status,
            data: result.data,
        }

    }).catch((error) => {
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
