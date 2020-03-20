import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";

const FormValid = (props) => {

    useEffect(() => { }, [props.isAuth])

    return (
        props.isAuth ?
            <Redirect to="/0/loader" from="/auth" />
            : <div> type your login/password </div>
    );
}
export default FormValid;
