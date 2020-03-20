import React from 'react';
import Img from 'react-image';

const Image = (props) => {
    return (
        <div>
            <br></br>
            <br></br>
            <Img width="400px" src={`//api.arstand-lab.ru${props.path}`} />
        </div>
    )
}
export default Image;
