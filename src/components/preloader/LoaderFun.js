import React, { useEffect } from 'react';
import './preloader.scss';
import { Redirect } from 'react-router-dom';

const Loader = (props) => {

    useEffect(()=>{},[props.globalState.isLoaded]);

    return (
        <div>
            {props.globalState.isLoaded ?
                    <Redirect to="/0/task/2" from="/0/loader" />
                    : <Animation />}
        </div>
    );
}
export default Loader;

const Animation = () => {
    return (
        <div className="container">
            <div className="item-1"><div></div></div>
            <div className="item-2"><div></div></div>
            <div className="item-3"><div></div></div>
            <div className="item-4"><div></div></div>
            <div className="item-5"><div></div></div>
            <div className="item-6"><div></div></div>
            <div className="item-7"><div></div></div>
            <div className="item-8"><div></div></div>
            <div className="item-9"><div></div></div>
        </div>
    );
}
