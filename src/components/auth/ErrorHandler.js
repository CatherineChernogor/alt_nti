import React from 'react';
import { Redirect } from "react-router-dom";

const ErrorHandler = (props) => {
    if (props.response == null)
        return (
            <div>type login and password</div>
        );
    else if (Math.round(props.response.status / 100) === 2)
        return (
            <Redirect to="/0/loader" from="/auth" />
        );
    else if (props.response.status === 400)
        return (
            <div>Bad Request: invalid data</div>
        );
    else if (props.response.status === 401)
        return (
            <div>Unauthorized</div>
        );
    else if (props.response.status === 403)
        return (
            <div>Forbidden</div>
        );
    else if (props.response.status === 404)
        return (
            <div>Not Found</div>
        );
    else if (props.response.status === 408)
        return (
            <div>Request Timeout</div>
        );
    else if (props.response.status === 420)
        return (
            <div>Check internet connection</div>
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
    else if (Math.round(props.response.status / 100) !== 2)
        return (
        <div>Error {props.response.status}</div>
        );
    else
        return <div>default</div>
};
export default ErrorHandler;