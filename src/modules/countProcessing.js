export let countWidth = (variant, invariant) => {// input data: 56 200
    if (invariant !== 0)
        return Math.ceil(variant / invariant * 100);//output data: 28
    else
        return 0;
}

export let countScore = (array, type) => {//input data: array of tasks, max/real-time
    let score = 0;
    array.forEach(el => {
        if (el) {
            if (type === 'max')
                score += el.points
            else
                score += el.progress;
        }
    });
    return score; //output data: 180
}