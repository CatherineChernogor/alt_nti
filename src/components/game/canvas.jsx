import React from 'react';

const Canvas = () => {
    const style = {
        border: '1px solid black',
    };
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax none"
            style={style}
        >
            <circle cx={0} cy={0} r={50} fill="green" />
        </svg>
    );
};

export default Canvas;