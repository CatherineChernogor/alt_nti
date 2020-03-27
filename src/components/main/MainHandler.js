import React from 'react';

import Loader from '../preloader/Loader';
import MainRouterHandler from './MainRouterHandler';

const MainHandler = (props) => {

    return (
        props.globalState.isLoaded
            ?
            <MainRouterHandler
                globalState={props.globalState}
                globalActions={props.globalActions} />
            :
            <Loader isLoaded={props.globalState.isLoaded} />
    );

}
export default MainHandler;
