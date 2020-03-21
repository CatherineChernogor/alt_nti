import React, { useEffect, useState } from 'react';
import '../../../App.css';
import { NavItemInfo, NavItemTask } from './NavItems';
import Section from './Section';

const Navigation = (props) => {

    let [sectionArray, setSectionArray] = useState();

    useEffect(() => {
        let contest = props.globalState.contest;
        let tasks = contest.tasks;

        let taskBlocksArray = tasks.map(
            (el) => el.task_block
        )

        taskBlocksArray = taskBlocksArray.filter((thing, index) => {
            return index === taskBlocksArray.findIndex(obj => {
                return JSON.stringify(obj) === JSON.stringify(thing);
            });
        });
        
        let sectionArray = taskBlocksArray.map(
            (el) => {
                console.log(el);
                return (<Section task_block={el} globalState={props.globalState} />)
            }
        )
        setSectionArray(sectionArray);

    }, [props.globalState.contest]);

    return (
        <div>{sectionArray}</div>);
}
export default Navigation;
