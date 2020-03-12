import '../../App.css';
import React, { useEffect, useRef } from 'react';
import { Redirect } from "react-router-dom";
import { sendPost } from '../../modules/Requests';

const Auth = (props) => {

    let usernameRef = useRef();
    let passwordRef = useRef();
 
    const submitButton = async () => {

        let t = sendPost("auth/login/", {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });
        let token = await t;
        (token) ?
            props.globalActions.setIsAuth(true)
            : props.globalActions.setIsAuth(false);
    };

    return (
        <div className="Auth" >

            <form className="form-auth option-text-m">

                <input type="text" ref={usernameRef} className='field' ></input>
                <input type="password" ref={passwordRef} className='field' ></input>

                <input type="button" value="ВОЙТИ" className='submit-button' onClick={submitButton}></input>
                <FormValid isAuth={props.isAuth} globalActions={props.globalActions} />
            </form>
        </div>
    );
}
export default Auth;


const FormValid = (props) => {

    useEffect(() => {

    }, [props.isAuth])

    if (props.isAuth) {
        return (
            <Redirect to="/loader" from="/auth" />);
    }
    else if (props.isAuth === false) {
        return (
            <div>try again</div>);
    }
    else if (props.isAuth === null) {
        return (
            <div> type your login/password </div>);
    }
}