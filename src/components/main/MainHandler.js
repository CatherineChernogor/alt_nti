import React from 'react';

import Loader from '../preloader/Loader';
import MainRender from './MainRender';

const MainHandler = (props) => {

    return (
        props.globalState.isLoaded ?
            <MainRender
                globalState={props.globalState}
                globalActions={props.globalActions} />
            : <Loader isLoaded={props.globalState.isLoaded} />
    );

}
export default MainHandler;
