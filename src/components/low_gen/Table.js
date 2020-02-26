import React, { createElement } from 'react';
import '../../App.css';
import '../../style/table.css';

function Table() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <table className='option-text-m'>
                <th>Попытки</th>
                <th>Баллы</th>
                <tr>
                    <td className='data right'>15:24 23.09.3434 work time 23s</td>
                    <td className='result'>34/100</td>
                </tr>
                <tr>
                    <td className='data wrong'>15:44 23.19.3344 wrong format</td>
                    <td className='result'>-</td>
                </tr>
                <tr>
                    <td className='data rigth'>{d.time + ' ' + d.date + ' ' + d.msg}</td>
                    <td className='result'>{b}</td>
                </tr>
            </table>
        </div>
    );
}

export default Table;

//test data
let d = {
    time: "15:34",
    date: "25.03.2020",
    msg: "work time 34s"
}

let b = '26/100'
