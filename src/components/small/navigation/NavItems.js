import '../../../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavItemTask = (props) => {

    let path = '/0/task/' + props.id;
    return (
        <li key={props.id}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
}
export const NavItemInfo = (props) => {

    let path = '/0/info/' + props.id;
    return (
        <li key={props.id}>
            <NavLink to={path}>Информация</NavLink>
        </li>
    );
}