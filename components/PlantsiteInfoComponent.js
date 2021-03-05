import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { PLANTSITES } from '../shared/plantsites';

function RenderPlantsite({plantsite}) {
    if (plantsite) {
        return (
            <Card 
                featuredTitle={plantsite.name}
                image={require('./images/gardening-girl.jpg')}
            >
                <Text style={{margin: 10}}>
                    {plantsite.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class PlantsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plantsites: PLANTSITES
        };
    }

    static navigationOptions = {
        title: 'Plantsite Information'
    }

    render() {
        const plantsiteId = this.props.navigation.getParam('plantsiteId');
        const plantsite = this.state.plantsites.filter(plantsite => plantsite.id === plantsiteId)[0];
        return <RenderPlantsite plantsite={plantsite} />;
    }
}

export default PlantsiteInfo;