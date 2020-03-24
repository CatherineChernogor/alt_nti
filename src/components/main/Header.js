import React from 'react';
import LogOut from '../auth/LogOut';

const Header = (props) => {
    return (
        <header className="">


            <div className="logo" alt="logo"></div>

            <LogOut
                isToken={props.isToken}
                isAuth = {props.isAuth}
                globalActions={props.globalActions} />

        </header>

    )
};

export default Header;