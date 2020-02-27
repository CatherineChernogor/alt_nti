import React from 'react';
import '../../../App.css';
import { NavLink } from 'react-router-dom';

const NavItemTask = (props) => {

    let path = '/0/task/' + props.id;
    return (
        <li><NavLink to={path}>{props.name}</NavLink> </li>
    );
}
const NavItemInfo = (props) => {

    let path = '/0/info/' + props.id;
    return (
        <li><NavLink to={path}>Информация</NavLink> </li>
    );
}

class Navigation extends React.Component {
    render() {

        console.log();
        let tasks = this.props.state.contest.data[0].tasks;
        console.log(tasks);

        let taskArray = tasks.map(
            (el) =>
                el.task_type === 1 ?
                    <NavItemTask name={el.title} id={el.id} />
                    : <NavItemInfo name={el.title} id={el.id} />
        );
        return (
            <ul className="option-text-m">
                {taskArray}
            </ul>
        );
    }
}



export default Navigation;