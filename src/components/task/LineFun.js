import React, { useState, useEffect } from 'react';
import {dateCleaner} from '../../modules/dateProcessing';
import '../../App.css';
import './table.css';

const Line = (props) => {

    let [score, setScore] = useState("0");
    let [message, setMessage] = useState("");
    let [style, setStyle] = useState("right");

    useEffect(() => {
        if (props.error === null) {
            setScore(props.result);
            setMessage(props.text);
            setStyle("right");
        } else {
            setScore('0');
            setMessage(props.error);
            setStyle("wrong");
        }
    }, [props.error, props.text, props.result]);


    return (
        <tr key={props.id}>
            <td className={`data ${style}`}>
                {dateCleaner(props.date) + message}
            </td>
            <td className='result'>{score +"/"+ props.points}</td>
        </tr >
    )

}

export default Line;

