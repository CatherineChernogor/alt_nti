import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AuthForm from './AuthForm';

const AuthHandler = (props) => {

    useEffect(() => {

        if (sessionStorage.getItem('token') != null){
            props.globalActions.setIsToken(true);
        }
        else
            props.globalActions.setIsToken(false)

    }, [props.isToken, props.globalActions])

    return (
        props.isToken ?
            <Redirect from="/auth" to="/0/task/ok" />
            : <AuthForm
                isAuth={props.isAuth}
                globalActions={props.globalActions} />
    );
}
export default AuthHandler;


