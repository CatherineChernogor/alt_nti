import React, { useEffect } from 'react';
import ErrorHandler from './ErrorHandler';

const FormValid = (props) => {

    useEffect(() => { }, [props.isAuth, props.response])

    return (
        <div className="auth-text option-text-m">
            <ErrorHandler response={props.response} />
        </div>
    )
}
export default FormValid;
