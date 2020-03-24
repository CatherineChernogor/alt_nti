import React from 'react';
import style from '../../../modules/style';


function Circle(props) {

    function showScore(num) {

        let x = num % 10;
        if (x === 1 && num !== 11) {
            return (num + " балла");
        } else if ((x === 2 || x === 3 || x === 4) && (num !== 12 && num !== 13 && num !== 14)) {
            return (num + " балла");
        } else {
            return (num + " баллов")
        }
    }

    return (
        <div className='circle blck-border'>
            <div style={style.txt4circle}>
            {showScore(props.content)}
            </div>
        </div>
    );

}

export default Circle;