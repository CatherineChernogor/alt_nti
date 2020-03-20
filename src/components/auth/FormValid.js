import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";

const FormValid = (props) => {

    useEffect(() => { }, [props.isAuth])


    if (props.isAuth)
        return (
            <Redirect to="/0/loader" from="/auth" />
        );
    else if (props.error == "400")
        return (
            <div> invalid data, try again  </div>
        );
    else if (props.error == "500")
        return (
            <div> connection error  </div>
        );
    else
        return (
            <div> type login and password </div>
        );

}
export default FormValid;
