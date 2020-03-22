import React from 'react';
//import Img from 'react-image';
import './table.css';

const Image = (props) => {
    return (
        <div>
            <br></br>
            <br></br>
            {/*<Img src={`//api.arstand-lab.ru${props.path}`} />*/}
            <img src={`//api.arstand-lab.ru${props.path}`} />
        </div>
    )
}
export default Image;
