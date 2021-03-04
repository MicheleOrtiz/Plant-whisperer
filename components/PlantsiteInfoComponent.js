import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

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

function PlantsiteInfo(props) {
    return <RenderPlantsite plantsite={props.plantsite} />;
}

export default PlantsiteInfo;