const TIME_DEFAULT = '00:00:00';

export let dateCleaner = (date) => { //input data: 2020-02-27T15:24:24Z
    let d = new Date(date);

    return (
        d.getFullYear() + '.' + d.getMonth() + '.' + d.getDate() + '\t'
        + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '\t');
    //output data: 2020.02.24	16:41:31
}

export let getTime = (date) => { //input data: 2020-02-27T15:24:24Z

    if (typeof date === undefined) {
        let d = new Date(date);
        return d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        //output data: 16:41:31
    }
    else return TIME_DEFAULT;//00:00:00
}

export let getSeconds = (time) => {//input data: 16:41:31

    if (typeof time !== undefined) {
        let parts = time.split(':');
        let sec = 0;
        parts.forEach(element => {
            sec = Number(sec * 60 + Number(element));
        });
        return sec;//output data: 60091
    }
    else return TIME_DEFAULT;
}

export let setTime = (sec) => {//input data: 60091
    let time = [];
    if (sec / 3600 >= 0)
        time[0] = Math.floor(sec / 3600);
    else
        time[0] = Math.ceil(sec / 3600);

    let mid = sec % 3600;
    if (mid / 60 >= 0)
        time[1] = Math.floor(mid / 60);
    else
        time[1] = Math.ceil(mid / 60);

    time[2] = mid % 60;

    let timeStr = '';
    time.forEach(element => {
        if (element < 0)
            element = 0;
        timeStr += String(element).padStart(2, 0) + ':';
    });
    timeStr = timeStr.slice(0, -1);
    return timeStr;//output data: 16:41:31
}

export let getTimeDiff = (startTime, curTime) => {//input data: 2020-02-27T15:24:24Z 2020-02-27T15:24:24Z

    let start = new Date(startTime);
    let current = new Date(curTime);

    return Math.round(Math.abs(start - current) / 1000); //output data: 6049
}

export let getDurationinSec = (str) => { //input data: 24 00:00:00 
    let objs = str.split(' ');
    return objs[0] * 24 * 3600 + getSeconds(objs[1]); // output data: 2073604
}