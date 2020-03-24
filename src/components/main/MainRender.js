import React from 'react';

import NavMenu from '../small/navigation/NavMenu';
import Chat from '../small/chat/Chat';
import Points from '../small/points/Points';
import Test from '../small/test/Test';
import RenderTasks from '../task/RenderTasks';
import Token from '../small/token/token';

const MainRender = (props) => {


    return (
        <div>
            <NavMenu globalState={props.globalState} />
            <Chat globalState={props.globalState} />
            <Test />
            {/*<Token />*/}
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
