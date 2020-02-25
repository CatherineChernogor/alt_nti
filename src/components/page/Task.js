import React from 'react';
import Points from '../Points';
import Table from '../Table';
import '../../App.css';


class Task extends React.Component {
    render() {
        return (
            <div className="main">
                <Points />
                <div className="heading2 title">{this.props.title}</div>
                <div className="normal-text task">{this.props.text}</div>
                <Table content={this.props.table} />
            </div>
        );
    }
}

export default Task;