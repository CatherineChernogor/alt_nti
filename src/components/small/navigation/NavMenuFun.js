import React, { useState } from 'react';
import '../../../App.css';
import '../../small/buttons.css';
import style from '../../../modules/style';
import Navigation from './NavigationFun';


const NavMenu = (props) => {

    let [state, setState] = useState();

    const openMenuBox = () => {
        setState(true);
    }
    const closeMenuBox = () => {
        setState(false);
    }
    const RenderMenu = () => {
        return (
            <div className="screen">

                <div
                    className="gray-screen"
                    onClick={closeMenuBox}
                    style={style.lowerElement}>
                </div>

                <div
                    className='nav-bar'
                    style={style.upperElement}>
                        <br></br>
                    <Navigation globalState={props.globalState} />
                </div>
            </div>
        );
    }
    const RenderBtn = () => {
        return (
            <div
                className="btn open-menu-btn"
                style={style.unabledElement}
                onClick={openMenuBox}>

            </div>
        );
    }
    return (
        state ? <RenderMenu /> : <RenderBtn />
    );
}

export default NavMenu;