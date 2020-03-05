import React, { useEffect, useState } from 'react';
import '../../App.css';
import './table.css';

import Line from './LineFun';

const Table = (props) => {


    let [answerArray, setAnswerArray] = useState();

    const answers = JSON.parse(localStorage.getItem("answers"));
    useEffect(() => {

        let answer = answers.map(
            (el) =>
                el.user_task === props.id ?
                    el.error == null ?
                        <Line key={el.id} text={el.data} date={el.date_send} error={null} result={el.result} points={props.points} />
                        : <Line key={el.id} text={null} date={el.date_send} error={el.error} result={el.result} points={props.points} />
                    : console.log(false)
        );
        setAnswerArray(answer);
    }, [props.id, props.points]);


    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <table className='option-text-m'>
                <tbody>
                    <tr>
                        <th>Попытки</th>
                        <th>Баллы</th>
                    </tr>
                    {answerArray}
                </tbody>
            </table>
        </div>
    );

}

export default Table;

