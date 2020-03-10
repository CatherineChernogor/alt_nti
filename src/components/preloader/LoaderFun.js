import React from 'react';
import './preloader.scss';

const Loader = (props) => {

    console.log(props);

    let isLoaded = true;

    return (
        <div>
            {isLoaded ? console.log("redirect") : <Animation />}
        </div>
    );
}
export default Loader;


const Animation = (props) => {
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

/*
render() {
    let redirect = () => {

        if (this.state.isLoaded === true) {

            /*return (
                < Redirect to="/0/task/1" from="/loader" />
            );

return (
    console.log("redirected")
);
        }
        else {
    this.handler();
    console.log("not redirect");
}
    }

return (
    <div className="container">
        {redirect()}
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
}*/