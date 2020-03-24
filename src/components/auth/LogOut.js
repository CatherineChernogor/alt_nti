import React, { useEffect } from 'react';
import './auth.css';
import '../../App.css';
import { Redirect } from 'react-router-dom';

const LogOutRender = (props) => {

    const handler = () => {
        console.log(props);
        sessionStorage.removeItem('token');
        props.globalActions.setIsToken(false);
    }
    return (
        <button className="logout-button heading3" onClick={handler}>LogOut</button>
    );
}


const LogOutHandler = (props) => {

    useEffect(() => { console.log(props)}, [props.isToken]);

    return (

        props.isToken || props.isAuth ?
            <LogOutRender
                isToken={props.isToken}
                globalActions={props.globalActions} />
            :
            <Redirect to="/auth" />
    )
}
export default LogOutHandler;

