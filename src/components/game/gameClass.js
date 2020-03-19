import React, { Component } from 'react';
import './gameStyle.css';

class Game extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className="backgroung">
                <Player />
            </div>
        );
    }
}
export default Game;

class Player extends Component {
    constructor(props) {
        super();
        this.state = {
            player: {
                x: 50,
                y: 100,
                height: 100,
                width: 50,
                action: "walk",
            }
        }
    }
    render() {
        return (
            <div className="walk"></div>
        )
    }
}