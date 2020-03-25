import React, { useEffect, useState } from 'react';
import Line from './LineFun';

const Table = (props) => {

    let [answerArray, setAnswerArray] = useState();

    useEffect(() => {
        //console.log(props.globalState.answers)

        let answer = props.globalState.answers
            .filter(el => el.user_task.task.id === props.id)
            .map(el => el.error == null
                ? <Line
                    key={el.id} text={el.data}
                    date={el.date_send} error={null}
                    result={el.result} points={props.points} />
                : <Line
                    key={el.id} text={null}
                    date={el.date_send} error={el.error}
                    result={el.result} points={props.points} />
            );

        //console.log(props.globalState.answers)
        setAnswerArray(answer);
    }, [
        props.id,
        props.points,
        props.globalState.answers
    ]);


    return (
        <div>
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

