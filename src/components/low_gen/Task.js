import '../../App.css';
import React from 'react';

import Table from './Table';

class Task extends React.Component {
    render() {
        return (
            <div >
                <div className="heading2 title">{this.props.title}</div>
                <div className="normal-text task">{this.props.text}</div>
                <Table />
            </div>
        );
    }
}

export default Task;