import React, { useEffect } from 'react';
import './auth.css';
import '../../App.css';
import { Redirect } from 'react-router-dom';

const LogOutRender = (props) => {

    const handler = () => {
        sessionStorage.removeItem('token');
        props.globalAction.setIsToken(false);
    }
    return (
        <button className="logout-button heading3" onClick={handler}>LogOut</button>
    );
}


const LogOutHandler = (props) => {

    useEffect(() => { }, [props.isToken]);

    return (

        props.isToken ?
            <LogOutRender
                isToken={props.isToken}
                globalAction={props.globalAction} />
            :
            <Redirect to="/auth" />
    )
}
export default LogOutHandler;

