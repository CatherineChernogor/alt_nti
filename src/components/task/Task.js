import '../../App.css';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import CodeSample from './CodeSample';

import Table from './TableFun';
import Image from './Image';

const Task = (props) => {

    let [points, setPoints] = useState("");
    useEffect(() => {
        setPoints(props.points);
    }, [props.points]);

    const toMarkdownFormat = (text) => {

        while (text.includes("\n"))
            text = text.replace("\n", "<br>");

        while (text.includes("<br>"))
            text = text.replace("<br>", "\n\n");

        return text;
    }

    return (

        <div >
            <div className="heading2 title">{props.task.title}</div>
            <div className="normal-text task">
                <ReactMarkdown source={toMarkdownFormat(props.task.text)}/>
            </div>
            <Image path={props.task.photo} />
            <CodeSample code={props.task.sample_code} />
            <Table id={props.task.id} points={points} globalState={props.globalState} />
        </div>
    );

}

export default Task;