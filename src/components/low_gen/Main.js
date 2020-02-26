import React from 'react';
import '../../App.css';

import Info from './Info';
import Start from './Start';

class Main extends React.Component {
    render() {
        return (
            <div className="main normal-text">
                {Info}
                {/*Start*/}
            </div>
        );
    }
}

export default Main;