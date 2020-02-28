import React from 'react';

import '../../../App.css';
import './points.css';

import Bar from './Bar';
import Circle from './Circle';

class Points extends React.Component {

    constructor() {
        super();
        this.state = {
            //test data 
            score: "",
            maxScore: "",
            time: "20:20",
            maxTime: "36:00",
        }
    }
    countProgress = (score, maxScore) => {
        return Math.ceil(score / maxScore * 100);
    }

    countTime = (time, maxTime) => {

        return 34;
    }
    
    countScore = (where, what, which) => {
        let score = 0;
        where.forEach(el => {
            score += el[what];
        });
        this.setState({ [which]: score });
    }


    componentDidMount() {

        let contest = JSON.parse(localStorage.getItem("contest"));
        //let progress = this.props.state.tasks.data;
        let progress = JSON.parse(localStorage.getItem("task"));


        this.countScore(progress, 'progress', 'score');
        this.countScore(contest[0].tasks, 'points', 'maxScore');


        //let start_time = contest.date_start;
        //let lasts = contest.duration;
    }
    render() {

        return (
            <div className="points">
                <div className="bars">
                    <Bar
                        width={this.countProgress(this.state.score, this.state.maxScore)}
                        color="#78d0ff"
                        content={"Прогресс - " + this.countProgress(this.state.score, this.state.maxScore) + "%"}
                    />
                    <Bar
                        width={this.countTime(this.state.time, this.state.maxTime)}
                        color="#96c7cc"
                        content={this.state.time}
                    />
                </div>
                <Circle
                    content={this.state.score}
                />
            </div>
        )
    }
}

export default Points;


