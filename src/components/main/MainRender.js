import '../../App.css';
import React from 'react';

import NavMenu from '../small/navigation/NavMenuFun';
import Chat from '../small/chat/ChatFun';
import Points from '../small/points/Points';
import Notification from '../small/NotificationFun';
import RenderTasks from '../task/RenderTasks';
import LogOut from '../auth/LogOut';

const MainRender = (props) => {

    
    return (
        <div>
            <NavMenu globalState={props.globalState} />
            <Chat globalState={props.globalState} />
            <Notification />
            <LogOut
                isToken={props.globalState.isToken}
                globalAction={props.globalActions} />
            <div className="content main">

                <Points globalState={props.globalState} />
                <RenderTasks
                    tasks={props.globalState.tasks}
                    globalState={props.globalState} />
            </div>
        </div>
    );

}
export default MainRender;
