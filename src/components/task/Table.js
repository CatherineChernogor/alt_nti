import React from 'react';
import '../../App.css';
import './table.css';

import Line from './LineFun';

class Table extends React.Component {
    
    render() {
        let answers =JSON.parse( localStorage.getItem("answers"));
        let answerArray = answers.map(
            (el) =>
                el.error == null ?
                    <Line key={el.id} text={el.data} date={el.date_send} error={null} result={el.result} />
                    : <Line key={el.id} text={null} date={el.date_send} error={el.error} result={el.result} />
        );
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
}

export default Table;

