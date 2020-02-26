import React, { createElement } from 'react';
import '../../../App.css';
import {NavLink} from 'react-router-dom';

const NavItemTask = (props)=>{

    let path = '/task/' + props.id;
    return (
        <li><NavLink to ={path}>{props.name}</NavLink> </li>
    );
}
const NavItemInfo = (props)=>{

    let path = '/info/' + props.id;
    return (
        <li><NavLink to ={path}>Информация</NavLink> </li>
    );
}

function Navigation(props){

    return(
        <ul className="option-text-m">
            <li>
                Компьютерное зрение
                <ul>
                    <NavItemTask name="Задача 1" id ="1"/>
                    <NavItemTask name="Задача 2" id ="2"/>
                    <NavItemTask name="Задача 3" id ="3"/>
                    <NavItemInfo id = "10"></NavItemInfo>
                </ul>
            </li>
            <li>3D-мэппинг                
                <ul>
                    <NavItemTask name="Задача 1" id ="4"/>
                    <NavItemTask name="Задача 2" id ="5"/>
                    <NavItemTask name="Задача 3" id ="6"/>
                    <NavItemInfo id = "11"></NavItemInfo>
                </ul>
            </li>
            <li>Разработка приложения              
                <ul>
                    <NavItemTask name="Задача 1" id ="7"/>
                    <NavItemTask name="Задача 2" id ="8"/>
                    <NavItemTask name="Задача 3" id ="9"/>
                    <NavItemInfo id = "12"></NavItemInfo>
                </ul>
            </li>
        </ul>
    );
}



export default Navigation;



/*
    const lvl1 = Object.keys(props.object);
    //console.log(Object.entries(props.object));

    let obj = {};
    let nav = props.object;
    for (let title in nav){
        let titleText = document.createElement('div');
        titleText.append(title);
        console.log('+',title);
        obj.set(title);
        for (let ti in nav[title]){
            console.log('++',ti);
            //console.log('task text', nav[title][ti]);
            obj.get(title).set(ti);
        }
        console.log(obj);
    }

    const array = [1, 2, 3, 4, 5];
    const listItems = lvl1.map((item) =>
        <li>{array}</li>
    );

    */
    
    //выводит тексты задач
    //var result = Object.values(props.object).map(v => Object.values(v))
    //console.log(result);
    
/*
    return(/*
        <div className="nav">
        {renderNav(props.nav)}
        </div>*/

        //document.querySelector('.nav-bar').append(navigation);
        /*for (let title in nav){
            let titleText = document.createElement('div');
            //console.log(document.querySelector('.navigation'));
            //document.querySelector('.navigation').append(titleText);
            titleText.append(title);
            console.log('+',title);
            for (let ti in nav[title]){
                console.log('++',ti);
                //console.log('task text', nav[title][ti]);
                
            }
        }*/