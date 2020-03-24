import React, { useEffect, useState } from 'react';
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
        let tasks = props.contest.tasks;

        let array = tasks
            .filter(el => el.task_block.id === props.task_block.id)
            .map(el => el.task_type.id === 1
                ? <NavItemTask
                    key={el.id}
                    name={el.title}
                    id={el.id} />
                : <NavItemInfo
                    key={el.id}
                    name={el.title}
                    id={el.id} />
            );
        setTaskArray(array);
    }, [props.contest, props.task_block.id]);

    return (
        <ul className="option-text-m">
            <SectionTitle name={props.task_block.name} />
            {taskArray}
        </ul>
    )
}
export default Section;