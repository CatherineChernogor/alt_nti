import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { defaultStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSample = (props) => {

    //const codeString = "import requests \n\nURL = 'http://62.109.20.222:8000' \n\nHEADERS = {\n\t'Authorization': 'Token f96be7ee6e762672ff323ca8f3e90a1c36a17dd0',\n\t'Content-Type': 'application/json'}";

    //console.log(props);
    return (
        props.code !== null ?
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <SyntaxHighlighter language="python" style={defaultStyle}>
                    {props.code}
                </SyntaxHighlighter>
            </div>
            : <br></br>
    );
}
export default CodeSample;