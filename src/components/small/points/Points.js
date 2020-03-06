import React, { useState, useEffect } from 'react';

import '../../../App.css';
import './points.css';

import Bar from './Bar';
import Circle from './Circle';
import Timer from './Timer';
import { countScore, countWidth } from '../../../modules/countProcessing';

const Points = (props) => {

    const TIME_DEFAULT = '0 00:00:00';
    const DATE_DEFAULT = new Date();

    let [score, setScore] = useState(0);
    let [maxScore, setMaxScore] = useState(0);
    let [startTime, setStartTime] = useState(DATE_DEFAULT);
    let [duration, setDuration] = useState(TIME_DEFAULT);

    useEffect(() => {

        const contest = JSON.parse(localStorage.getItem("contest"));
        let progress = JSON.parse(localStorage.getItem("task"));

        setStartTime(contest[0].date_start);
        setDuration(contest[0].duration);
        setScore(countScore(progress, 'real-time'));
        setMaxScore(countScore(progress, 'max'));

    }, [props.score]);

    return (
        <div className="points">
            <div className="bars">
                <Bar
                    width={countWidth(score, maxScore)}
                    color="#78d0ff"
                    content={"Прогресс - " + countWidth(score, maxScore) + "%"}
                />
                <Timer
                    startTime={startTime}
                    duration={duration}
                />
            </div>
            <Circle
                content={score}
            />
        </div>
    )
}

export default Points;


