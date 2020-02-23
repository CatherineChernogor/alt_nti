import React from 'react';
import '../../App.css';

const info1 = 'info1 info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info ';
class Task extends React.Component {
    render() {
        return (
            <div className="main normal-text">
                {info1}
            </div>
        );
    }
}

export default Task;