import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";

const FormValid = (props) => {

    useEffect(() => {

        if (typeof props.response !== typeof undefined
            && Math.round(props.response.status / 100) === 2) {

            props.globalActions.setIsAuth(true);
            sessionStorage.setItem('token', props.response.data.key);
        } else {
            props.globalActions.setIsAuth(false);
        }

    }, [props.isAuth, props.response, props.globalActions])

    return (
        <ErrorHandler response={props.response} />
    )
}
export default FormValid;




const ErrorHandler = (props) => {
    if (props.response == null)
        return (
            <div> type login and password </div>
        );
    else if (Math.round(props.response.status / 100) === 2)
        return (
            <Redirect to="/0/loader" from="/auth" />
        );
    else if (props.response.status === 400)
        return (
            <div> Bad Request: invalid data, try again  </div>
        );
    else if (props.response.status === 401)
        return (
            <div> Unauthorized </div>
        );
    else if (props.response.status === 403)
        return (
            <div> Forbidden </div>
        );
    else if (props.response.status === 404)
        return (
            <div> Not Found </div>
        );
    else if (props.response.status === 408)
        return (
            <div> Request Timeout </div>
        );
    else if (props.response.status === 420)
        return (
            <div> Check internet connection </div>
        );
    else if (Math.round(props.response.status / 100) === 4)
        return (
            <div>Error 4xx</div>
        );
    else if (props.response.status === 500)
        return (
            <div>Internal Server Error</div>
        );
    else if (props.response.status === 502)
        return (
            <div>Bad Gateway</div>
        );
    else if (props.response.status === 503)
        return (
            <div>Service Unavailable</div>
        );
    else if (props.response.status === 504)
        return (
            <div>Gateway Timeout</div>
        );
    else if (Math.round(props.response.status / 100) === 5)
        return (
            <div>Error 5xx</div>
        );
    else
        return <div>default</div>
}