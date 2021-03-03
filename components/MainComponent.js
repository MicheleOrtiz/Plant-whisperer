import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { PLANTSITES } from '../shared/plantsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantsites: PLANTSITES
        };
    }

    render() {
        return <Directory plantsites={this.state.plantsites} />;
    }
}

export default Main;