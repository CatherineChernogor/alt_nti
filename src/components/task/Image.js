import React from 'react';

const Image = (props) => {
    return (
        <div>
            <br></br>
            <br></br>
            <img src={`//api.arstand-lab.ru${props.path}`} alt={`from${props.path}`}/>
        </div>
    )
}
export default Image;
