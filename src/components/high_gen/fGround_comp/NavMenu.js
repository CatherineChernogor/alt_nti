import React, { createElement } from 'react';
import '../../../App.css';
import '../../../style/buttons.css';
import style from '../../../style/style';
import Navigation from './Navigation';

class NavMenu extends React.Component {
    constructor() {
        super()
        this.state = { menu: false }
    }
    openMenuBox = () => {
        this.setState({ menu: true })
    }
    closeMenuBox = () => {
        this.setState({ menu: false })
    }
    renderMenu = () => {
        return (
            <div className="screen">

                <div
                    className="gray-screen"
                    style={style.lowerElement}>
                </div>

                <div
                    className='nav-bar'
                    style={style.upperElement}>

                    <button
                        className='close-menu-btn option-text-m'
                        onClick={this.closeMenuBox}>
                        disable menu
                        </button>
                    <Navigation state={this.props.state}></Navigation>
                </div>
            </div>
        );
    }
    renderBtn = () => {
        return (
            <div
                className="btn open-menu-btn"
                style={style.unabledElement}
                onClick={this.openMenuBox}>

            </div>
        );
    }
    render() {
        if (this.state.menu) {
            return this.renderMenu();
        } else {
            return this.renderBtn();
        }
    }
}

export default NavMenu;