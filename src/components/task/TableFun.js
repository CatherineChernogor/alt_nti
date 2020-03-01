import React, { useEffect, useState } from 'react';
import '../../App.css';
import './table.css';

import Line from './LineFun';

const Table = () => {


    let [answerArray, setAnswerArray] = useState();

    const answers = JSON.parse(localStorage.getItem("answers"));
    
    useEffect(() => {
        
        let answer = answers.map(
            (el) =>
                el.error == null ?
                    <Line key={el.id} text={el.data} date={el.date_send} error={null} result={el.result} />
                    : <Line key={el.id} text={null} date={el.date_send} error={el.error} result={el.result} />
        );
        setAnswerArray(answer);
    }, []);


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

