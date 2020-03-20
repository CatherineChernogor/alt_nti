import './auth.css';
import React, { useRef, useEffect, useState } from 'react';
import { sendPost } from '../../modules/Requests';
import FormValid from './FormValid';
import { Redirect } from 'react-router-dom';
import arstand from '../../img/AR-stand.jpg';

const Auth = (props) => {

    let usernameRef = useRef();
    let passwordRef = useRef();

    const submitButton = async () => {

        let t = sendPost("auth/login/", {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });
        let token = await t;

        if (token) {
            props.globalActions.setIsAuth(true);
            sessionStorage.setItem('token', token.key);
        } else {
            props.globalActions.setIsAuth(false);
        }

    };

    useEffect(() => {
        sessionStorage.getItem('token') !== null ?
            props.globalActions.setIsToken(true)
            : props.globalActions.setIsToken(false)
    }, [props.isToken])

    return (
        <div className="Auth" >
            {
                props.isToken && props.isLoaded ?

                    <Redirect from="/auth" to="/0/task/2" />

                    :
                    <div>
                        <form className="form-auth option-text-m">

                            <input type="text" ref={usernameRef} className='field' ></input>
                            <input type="password" ref={passwordRef} className='field' ></input>

                            <input type="button" value="ВОЙТИ" className='submit-button' onClick={submitButton}></input>
                            <FormValid isAuth={props.isAuth} globalActions={props.globalActions} />
                        </form>
                        <img src={arstand} width="60%" alt="ar-stand" />
                    </div>
            }
        </div>
    );
}
export default Auth;
