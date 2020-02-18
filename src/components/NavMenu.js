import React, { createElement } from 'react';
import '../App';
import '../style/buttons.css';
import style from '../style/style';
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
                    <Navigation
                        object={navigation}>

                    </Navigation>
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

//test data

let navigation = {
    "Проективная геометрия": {
        "task1": "text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 ",
        "task2": "text2 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 ",
        "task3": "text3 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 "
    },
    "Компьютерное зрение": {
        "Классификатор маркеров": "Имеются изображения маркеров 8 типов. Задача - написать классификатор маркеров, который по одному изображению говорит его id и разворот относительно оригинального изображения.'+'<br></br>'+'Для получения оригинальных изображений и их id следует отправить запрос на сервер с коммандо get_omarkers Для получения маркеров со стенда, которые следует распознать нужно отправить запрос на сервер get_merkerks Для проверки реализованного классификатора нужно сначала обратиться к серверу для получения маркеров расположенных на стенде, затем отправить запрос на проверку с командой check, в котором нужно передать массив типа [(id, x, y, r),...].",
        "task2": "text2 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 ",
        "task3": "text3 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 "
    }
}


