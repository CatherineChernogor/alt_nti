import React, { useEffect, useState } from 'react';
import '../../../App.css';
import { NavItemInfo, NavItemTask } from './NavItems';

const Navigation = (props) => {

    let [taskArray1, setTaskArray1] = useState();
    let [taskArray2, setTaskArray2] = useState();
    let [taskArray3, setTaskArray3] = useState();


    useEffect(() => {
        let contest = props.globalState.contest;
        let tasks = contest.tasks;

        let array1 = tasks.map(
            (el) => {
                if (el.task_block === 1) {
                    if (el.task_type === 1)
                        return <NavItemTask key={el.id} name={el.title} id={el.id} />
                    else
                        return <NavItemInfo key={el.id} name={el.title} id={el.id} />
                }
                else return null;
            }
        );
        setTaskArray1(array1);
        let array2 = tasks.map(
            (el) => {
                if (el.task_block === 2) {
                    if (el.task_type === 1)
                        return <NavItemTask key={el.id} name={el.title} id={el.id} />
                    else
                        return <NavItemInfo key={el.id} name={el.title} id={el.id} />
                }
                else return null;
            }
        );
        setTaskArray2(array2);
        let array3 = tasks.map(
            (el) => {
                if (el.task_block === 3) {
                    if (el.task_type === 1)
                        return <NavItemTask key={el.id} name={el.title} id={el.id} />
                    else
                        return <NavItemInfo key={el.id} name={el.title} id={el.id} />
                }
                else return null;
            }
        );
        setTaskArray3(array3);
    }, [props.globalState.contest]);

    return (
        <div>
            <ul className="option-text-m">
                <div className="section">Компьютерное зрение</div>
                {taskArray1}
            </ul>
            <ul className="option-text-m">
                <div className="section">Проективная геометрия</div>
                {taskArray2}
            </ul>
            <ul className="option-text-m">
                <div className="section">Разработка приложения</div>
                {taskArray3}
            </ul>
        </div>
    );

}

export default Navigation;
