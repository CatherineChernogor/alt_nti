import React, { createElement } from 'react';
import '../App.css';
import { render } from '@testing-library/react';

function Navigation(props){
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
    

    return(/*
        <div className="nav">
        {renderNav(props.nav)}
        </div>*/
        <ul className="option-text-m">
            <li>
                Компьютерное зрение
                <ul>
                <li>Задача</li>
                <li>Информация</li>
                </ul>
            </li>
            <li>Проективная геометрия                
                <ul>
                <li>Задача </li>
                <li>Информация</li>
                </ul>
            </li>
        </ul>
    );
}



export default Navigation;





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