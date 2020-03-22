import './auth.css';
import React, { useRef, useState, useEffect } from 'react';
import { sendPost } from '../../modules/Requests';
import FormValid from './FormValid';
import arstand from '../../img/AR-stand.jpg';

const AuthForm = (props) => {

    let usernameRef = useRef();
    let passwordRef = useRef();
    let [res, setRes] = useState();

    const submitButton = async () => {

        let r = await sendPost("auth/login/", {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });
        let response = await r;
        setRes(response);
    };

    useEffect(() => {

        if (res !== undefined && Math.round(res.status / 100) === 2) {
            props.globalActions.setIsAuth(true);
            sessionStorage.setItem('token', res.data.key);
        }
        else
            props.globalActions.setIsAuth(false);

    }, [res, props.isAuth])

    return (
        <div className="auth-block">
            <form className="auth-form">

                <input type="text" ref={usernameRef} className='field' ></input>
                <input type="password" ref={passwordRef} className='field' ></input>
                <input type="button" value="ВОЙТИ" className='submit-button' onClick={submitButton}></input>

                <FormValid isAuth={props.isAuth} response={res} globalActions={props.globalActions} />
            </form>
            <img src={arstand} className="ar-stand-img"/>
        </div>
    );
}
export default AuthForm;
