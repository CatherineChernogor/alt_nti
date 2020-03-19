import React, { useEffect, useState } from 'react';
import '../../App.css';
import './table.css';

import Line from './LineFun';

const Table = (props) => {


    let [answerArray, setAnswerArray] = useState();

    //console.log(props);
    //const answers = JSON.parse(localStorage.getItem("answers"));

    useEffect(() => {
        //console.log(props.globalState);
        let answers = props.globalState.answers;
        let answer = answers.map(
            function (el) {
                if (el.user_task === props.id) {
                    if (el.error == null)
                        return <Line key={el.id} text={el.data} date={el.date_send} error={null} result={el.result} points={props.points} />
                    else return <Line key={el.id} text={null} date={el.date_send} error={el.error} result={el.result} points={props.points} />
                }
            }
        );
        setAnswerArray(answer);
    }, [props.id, props.points, props.globalState.answers]);


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

