import React, { useEffect, useState } from 'react';
import '../../../App.css';
import { NavItemInfo, NavItemTask } from './NavItems';

const SectionTitle = (props) => {
    return (
        <div className="section">
            {props.name}
        </div>);
}

const Section = (props) => {

    let [taskArray, setTaskArray] = useState();

    useEffect(() => {
        let contest = props.globalState.contest;
        let tasks = contest.tasks;

        let array = tasks.map(
            (el) => {
                if (el.task_block.id === props.task_block.id && el.task_type.id === 1)
                    return <NavItemTask
                        key={el.id}
                        name={el.title}
                        id={el.id} />
                else if (el.task_block.id === props.task_block.id && el.task_type.id === 2)
                    return <NavItemInfo
                        key={el.id}
                        name={el.title}
                        id={el.id} />
            }
        );
        setTaskArray(array);
    }, [props.globalState.contest]);

    return (
        <ul className="option-text-m">
            <SectionTitle name={props.task_block.name} />
            {taskArray}
        </ul>
    )
}
export default Section;