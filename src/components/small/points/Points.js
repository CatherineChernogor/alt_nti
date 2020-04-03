import React, { useState, useEffect } from 'react';

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

        let contest = props.globalState.contest;

        let progress = props.globalState.contest.tasks;


        setStartTime(contest.date_start);
        setDuration(contest.duration);
        setScore(countScore(progress, 'real-time'));
        setMaxScore(countScore(progress, 'max'));

    }, [
        props.score, 
        props.globalState.contest, 
        props.globalState.tasks
    ]);

    return (
        <div className="points">
            <div className="bars">
                <Bar
                    width={countWidth(score, maxScore)}
                    color="#78d0ff"
                    content={`Прогресс - ${countWidth(score, maxScore)}%`}
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


