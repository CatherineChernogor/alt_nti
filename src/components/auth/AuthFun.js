import './auth.css';
import React, { useRef, useEffect, useState } from 'react';
import { sendPost } from '../../modules/Requests';
import FormValid from './FormValid';
import { Redirect } from 'react-router-dom';
import arstand from '../../img/AR-stand.jpg';

const Auth = (props) => {

    let usernameRef = useRef();
    let passwordRef = useRef();

    var [res, setRes] = useState();

    const submitButton = async () => {

        let r = sendPost("auth/login/", {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });
        let response = await r;
        setRes(response);
    };

    useEffect(() => {
        sessionStorage.getItem('token') !== null ?
            props.globalActions.setIsToken(true)
            : props.globalActions.setIsToken(false)
    }, [props.isToken, props.globalActions])

    return (

        props.isToken && props.isLoaded ?

            <Redirect from="/auth" to="/0/task/2" />
            :
            <div className="Auth" >
                <form className="form-auth align-middle option-text-m">

                    <input type="text" ref={usernameRef} className='field' ></input>
                    <input type="password" ref={passwordRef} className='field' ></input>

                    <input type="button" value="ВОЙТИ" className='submit-button' onClick={submitButton}></input>
                    <FormValid isAuth={props.isAuth} response={res} globalActions={props.globalActions} />
                </form>
                <img className="align-middle" src={arstand} width="60%" alt="ar-stand" />
            </div>

    );
}
export default Auth;
