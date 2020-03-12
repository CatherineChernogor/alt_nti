import React from 'react';
import './preloader.scss';
import { Redirect } from 'react-router-dom';
import { sendGet } from '../../modules/Requests';

class Loading extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoaded: false
        }
    }
    handler = async () => {
        let timer = await sendGet("contest/");
        sendGet("answer/");

        sendGet("task/");
        sendGet("notification/");
        console.log(timer);
    }
    componentDidMount() {

        setTimeout(() => {
            if (typeof localStorage.getItem("contest") !== undefined) {
                this.setState({ isLoaded: true });
                console.log("changeState");
            } else {
                this.handler();
            }
        }, 5000)
    }
    render() {
        let redirect = () => {

            if (this.state.isLoaded === true) {

                /*return (
                    < Redirect to="/0/task/1" from="/loader" />
                );*/
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
            <div class="container">
                {redirect()}
                <div class="item-1"><div></div></div>
                <div class="item-2"><div></div></div>
                <div class="item-3"><div></div></div>
                <div class="item-4"><div></div></div>
                <div class="item-5"><div></div></div>
                <div class="item-6"><div></div></div>
                <div class="item-7"><div></div></div>
                <div class="item-8"><div></div></div>
                <div class="item-9"><div></div></div>
            </div>

        );
    }
}
export default Loading;