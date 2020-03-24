import React, { useState } from 'react';
import '../../small/common_buttons_styles.css';
import style from '../../../modules/style';
import './token.css'


const NavMenu = (props) => {

    let [state, setState] = useState();

    const openBox = () => {
        setState(true);
    }
    const closeBox = () => {
        setState(false);
    }
    const RenderBox = () => {
        return (
            <div className="screen">

                <div
                    className="gray-screen"
                    onClick={closeBox}
                    style={style.lowerElement}>
                </div>

                <div
                    className='token-field option-text-s'
                    style={style.upperElement}>
                    <br />
                   token: {sessionStorage.getItem('token')}
                </div>
            </div>
        );
    }
    const RenderBtn = () => {
        return (
            <div
                className="open-btn heading2"
                style={style.unabledElement}
                onClick={openBox}>
                    T
            </div>
        );
    }
    return (
        state ? <RenderBox /> : <RenderBtn />
    );
}

export default NavMenu;