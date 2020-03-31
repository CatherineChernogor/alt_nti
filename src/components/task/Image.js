import React from 'react';

const Image = (props) => {
    return (
        props.path !== null ?
        <div>
            <br></br>
            <br></br>
            <img src={`//api.arstand-lab.ru${props.path}`} alt={`from ${props.path}`}/>
        </div>
        :
        <br/>
    )
}
export default Image;
