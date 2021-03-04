import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import PlantsiteInfo from './PlantsiteInfoComponent';
import { View } from 'react-native';
import { PLANTSITES } from '../shared/plantsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantsites: PLANTSITES,
            selectedPlantsite: null
        };
    }

    onPlantsiteSelect(plantsiteId) {
        this.setState({selectedPlantsite: plantsiteId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    plantsites={this.state.plantsites}
                    onPress={plantsiteId => this.onPlantsiteSelect(plantsiteId)}
                />
                <PlantsiteInfo
                    plantsite={this.state.plantsites.filter(
                        plantsite => plantsite.id === this.state.selectedPlantsite)[0]}
                />
            </View>
        );
    }
}

export default Main;