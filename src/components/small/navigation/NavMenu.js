import React from 'react';
import '../../../App.css';
import '../../small/buttons.css';
import style from '../../../modules/style';
import Navigation from './NavigationFun';


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
                    <Navigation />
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