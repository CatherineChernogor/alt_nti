import React from 'react';

import '../../../App.css';
import '../../small/buttons.css';
import style from '../../../modules/style';

const RenderBtn = (props) => {

    const openChatBox = () => {
        props.setStatus(true);
    }
    
    return (
        <div
            className="btn open-chat-btn"
            style={style.unabledElement}
            onClick={openChatBox}>

            {
                props.unread > 0 ?
                    < div className="unread-amount">{props.unread}</div>
                    : <div />
            }
        </div >
    )
}

export default RenderBtn;