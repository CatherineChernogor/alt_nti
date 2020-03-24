import React from 'react';
import ReactMarkdown from 'react-markdown';

const Info = (props) => {

    const toMarkdownFormat = (text) => {

        while (text.includes("\n"))
            text = text.replace("\n", "<br>");

        while (text.includes("<br>"))
            text = text.replace("<br>", "\n\n");

        return text;
    }
    return (
        <div className="">
            <div className="heading2 title">{props.title}</div>
            <div className="normal-text">
                <ReactMarkdown source={toMarkdownFormat(props.text)} />
            </div>
        </div>
    );

}

export default Info;