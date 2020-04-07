import React, { useEffect } from 'react';

const ErrorPage = (props) => {
    console.log(props.response)
    useEffect(() => { }, [props.response])

    if (props.response !== '')
        return (
            <div className="heading3 contest-error-message">
                {props.response.data.data}
            </div>
        );
    
}
export default ErrorPage;