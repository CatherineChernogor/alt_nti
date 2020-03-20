import React from 'react';
import Img from 'react-image';

const Image = (props) => {
    console.log(props.path)
    return (
        <Img width="400px" src={`//api.arstand-lab.ru${props.path}`} />
    )
}
export default Image;
