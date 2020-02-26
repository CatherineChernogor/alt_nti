import React, { createElement } from 'react';
import Bar from './Bar';
import Circle from './Circle';
import '../../../App.css';
import '../../../style/points.css';
function Points() {

    function countProgress (score, maxScore){
        return Math.ceil(score / maxScore * 100);
    }

    function countTime(time, maxTime){
        
        return 34;
    }
    return (
        <div className="points">
            <div className="bars">
                <Bar
                    width = {countProgress(score, maxScore)}
                    color="#78d0ff"
                    content={"Прогресс - " + countProgress(score, maxScore)+"%"}
                />
                <Bar
                    width = {countTime(time, maxTime)}
                    color="#96c7cc"
                    content={time}
                />
            </div>
            <Circle
                content={score}
            />
        </div>
    );
}

export default Points;


//test data 
let score = 67;
let maxScore = 450;
let time = "20:20";
let maxTime = "36:00";