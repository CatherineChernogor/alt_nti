"use strict";

export let countWidth = (variant, invariant) => {// input data: 56 200
    return Math.ceil(variant / invariant * 100);//output data: 28
}

export let countScore = (array, type) => {//input data: array of tasks, max/real-time
    let score = 0;
    array.forEach(el => {
        type === 'max' ?
            score += el.task.points :
            score += el.progress;
    });
    return score; //output data: 180
}