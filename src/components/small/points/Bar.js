import React from 'react';
import '../../../App.css';

function Bar(props) {

    return (
        <div className='bar blck-border option-text-m'>
            <div style={{
                backgroundColor: props.color,
                width: props.width * 2 + 'px',
                height: "100%"
            }}>
            </div>
            <div style={{
                position: 'inherit',
                marginTop: "-23px"
            }}>
                {props.content}
            </div>
        </div>
    );
}

export default Bar;