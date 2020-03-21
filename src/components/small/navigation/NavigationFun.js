import React, { useEffect, useState } from 'react';
import '../../../App.css';
import { NavItemInfo, NavItemTask } from './NavItems';

const Navigation = (props) => {

    let [taskArray, setTaskArray] = useState();


    useEffect(() => {
        let contest = props.globalState.contest;
        let tasks = contest.tasks;

        let array = tasks.map(
            (el) => {
                //if (el.task_block !== 3) {
                    //console.log(el)
                    if (el.task_type.id === 1)
                        return <NavItemTask key={el.id} name={el.title} id={el.id} />
                    else if (el.task_type.id === 2)
                        return <NavItemInfo key={el.id} name={el.title} id={el.id} />
                // }
                // else return null;
            }
        );
        setTaskArray(array);
    }, [props.globalState.contest]);

    return (
        <div>
            <Section taskArray={taskArray}/>
        </div>
    );

}

export default Navigation;


const SectionTitle = (props) => <div className="section">{props.title}</div>;

const Section = (props) => {
    return (
        <ul className="option-text-m">
            <SectionTitle title={"section 1"} />
            {props.taskArray}
        </ul>
    )
}