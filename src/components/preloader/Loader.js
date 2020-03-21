import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Animation from './Animation';

const Loader = (props) => {

    useEffect(() => { }, [props.isLoaded]);

    return (
        <div>
            {
                props.isLoaded ?
                    <Redirect to="/0/task/2" from="/0/loader" />
                    : <Animation />
            }
        </div>
    );
}
export default Loader;
