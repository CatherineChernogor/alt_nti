import React, { useEffect } from 'react';
import ErrorHandler from './ErrorHandler';

const FormValid = (props) => {

    useEffect(() => {

        /*if (typeof props.response !== typeof undefined &&
            Math.round(props.response.status / 100) === 2 &&
            ) {

            props.globalActions.setIsAuth(true);
            sessionStorage.setItem('token', props.response.data.key);
        }
        else {
            props.globalActions.setIsAuth(false);
        }
        console.log("formvalid useeffect response ", props.response, "isA ", props.isAuth);
*/
    }, [props.isAuth, props.response, props.globalActions])

    return (
        <ErrorHandler response={props.response} />
    )
}
export default FormValid;
