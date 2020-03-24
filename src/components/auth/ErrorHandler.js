import React from 'react';
import { Redirect } from "react-router-dom";

const ErrorHandler = (props) => {
    if (props.response == null)
        return ("введите логин и пароль");
    else
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
                    if (props.response.status === 500)
                        return ("Internal Server Error");
                    else
                        if (props.response.status === 502)
                            return ("Bad Gateway");
                        else
                            if (props.response.status === 503)
                                return ("Service Unavailable");
                            else
                                if (props.response.status === 504)
                                    return ("Gateway Timeout");
                                else
                                    if (Math.round(props.response.status / 100) !== 2)
                                        return (`Error ${props.response.status}`);
                                    else
                                        return ("default")
};
export default ErrorHandler;