import React, { useEffect, useState } from 'react';
import '../../../App.css';
import { NavItemInfo, NavItemTask } from './NavItems';

const Navigation = () => {

    let contest = JSON.parse(localStorage.getItem("contest"));
    let tasks = contest[0].tasks;

    let [taskArray, setTaskArray]  = useState();
    
    useEffect(() => {

        let array = tasks.map(
            (el) =>
                el.task_type === 1 ?
                    <NavItemTask key={el.id} name={el.title} id={el.id} />
                    : <NavItemInfo key={el.id} name={el.title} id={el.id} />
        );
        setTaskArray(array);
    }, []);

    return (
        <ul className="option-text-m">
            {taskArray}
        </ul>
    );

}

export default Navigation;
