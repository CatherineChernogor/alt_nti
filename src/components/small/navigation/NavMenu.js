import React, { useState, useMemo, useEffect, useRef } from 'react';
import '../../small/common_buttons_styles.css';
import './nav.css';
import style from '../../../modules/style';
import Navigation from './Navigation';



const NavMenu = (props) => {

    let [state, setState] = useState();
    //let memoizedValue = useMemo(() => setState(true), [state]);
    //console.log(memoizedValue)

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
                    <br />
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
        <div>{/*console.log("rerender menu")*/}
            {state ? <RenderMenu /> : <RenderBtn />}
        </div>

    );
}

export default NavMenu;
