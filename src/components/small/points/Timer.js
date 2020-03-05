"use strict";

import React, { useState, useEffect } from 'react';
import { setTime, getTimeDiff, getDurationinSec } from '../../../modules/dateProcessing';
import { countWidth } from '../../../modules/countProcessing';
import Bar from './Bar';

const Timer = (props) => {


  let [seconds, setSeconds] = useState(0);
  let [maxSec, setMaxSec] = useState(0);

  useEffect(() => {

    let interval;
    if (seconds !== 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);

    } else {

      let curDate = new Date()
      setMaxSec(getDurationinSec(props.duration));
      setSeconds(getDurationinSec(props.duration) - getTimeDiff(props.startTime, curDate));
    }

    return () => clearInterval(interval);

  }, [seconds, props.duration, props.startTime]);

  return (
    <div className="">
      <Bar
        width={countWidth(seconds, maxSec)}
        color="#96c7cc"
        content={setTime(seconds)}
      />
    </div>
  );
};

export default Timer;