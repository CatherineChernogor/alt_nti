import './auth.css';
import React, { useRef, useState, useEffect } from 'react';
import { sendPost } from '../../modules/Requests';
import FormValid from './FormValid';
import arstand from '../../img/AR-stand.jpg';

const AuthForm = (props) => {

    let usernameRef = useRef();
    let passwordRef = useRef();

    var [res, setRes] = useState();
    const submitButton = async () => {

        let r = await sendPost("auth/login/", {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });
        let response = await r;
        setRes(response);
    };

    useEffect(() => {
        console.log(res);

        if (res !== undefined && Math.round(res.status / 100) === 2) {
            console.log(true)
            props.globalActions.setIsAuth(true);
            sessionStorage.setItem('token', res.data.key);
        }
        else {
            console.log(false)

            props.globalActions.setIsAuth(false);
        }

        console.log(props.isAuth);
    }, [res, props.isAuth])

    return (
        <div className="Auth" >
            <form className="form-auth align-middle option-text-m">
                <div className="align-column">
                    <input type="text" ref={usernameRef} className='field' ></input>
                    <input type="password" ref={passwordRef} className='field' ></input>

                    <input type="button" value="ВОЙТИ" className='submit-button' onClick={submitButton}></input>
                </div>
                <FormValid isAuth={props.isAuth} response={res} globalActions={props.globalActions} />
            </form>
            <img className="align-middle" src={arstand} width="60%" alt="ar-stand" />
        </div>
    );
}
export default AuthForm;
