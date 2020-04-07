import React from 'react';
import { Redirect } from "react-router-dom";

const ErrorHandler = (props) => {

    if (props.response == null)
        return ("введите логин и пароль");
    else {
        console.log("error " + props.response.status);
        console.log(props.response.data);
        if (Math.round(props.response.status / 100) === 2)
            return (
                <Redirect to="/0/loader" from="/auth" />
            );
        else
            if (props.response.status === 400)
                return ("некоректный логин или пароль");
            else
                if (props.response.status === 420)
                    return ("проверьте подключение к интернету");
                else
                    if (Math.round(props.response.status / 100) !== 2)
                        return (`Error ${props.response.status}`)
                    else
                        return ("default")
    }
};
export default ErrorHandler;