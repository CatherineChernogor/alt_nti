import React from 'react';
import ReactMarkdown from 'react-markdown';

const Info = (props) => {

    const toMarkdownFormat = (text) => {

        while (text.includes("\n"))
            text = text.replace("\n", "<br>");

        while (text.includes("<br>"))
            text = text.replace("<br>", "\n\n");
/*
        while (text.includes("*"))
            text = text.replace("*", "_");

        while (text.includes("_"))
            text = text.replace("_", "      * ");
*/
        return text;
    }
    return (
        <div className="">
            <div className="heading2 title">{props.title}</div>
            <div className="normal-text">
                {/*console.log(toMarkdownFormat(props.text))*/}
                <ReactMarkdown source={toMarkdownFormat(props.text)} />
            </div>
        </div>
    );

}

export default Info;