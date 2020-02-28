import React from 'react';
import '../../App.css';
import './table.css';

class Line extends React.Component {

    dateCleaner = (date) => {

        let data =date.split("T");
        let time = data[0];
        data = data[1].split(".")[0];
        time += '\t' +data +'\t';

        return time;
    }

    renderRight = (props) => {
        return (
            <tr key={props.id}>
                <td className='data rigth'>{`${this.dateCleaner(props.date)}${props.text}`}</td>
                <td className='result'>{props.result}</td>
            </tr>
        );
    }
    renderWrong = (props) => {
        return (
            <tr>
                <td className='data wrong'>{`${this.dateCleaner(props.date)}${props.error}`}</td>
                <td className='result'>0</td>
            </tr>
        );
    }
    render() {
        if (this.props.error == null) {
            return this.renderRight(this.props);
        }
        else {
            return this.renderWrong(this.props);
        }
    }
}

export default Line;