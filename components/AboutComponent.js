import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { ListItem, Card} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        partners: state.partners
    };
};

function Mission () {
    return(
    <Card title="The Right Way To Water Your Plants"> 
<Text>Plants need water. Caring for plants means you’ll have to water your plants.

But when should you water your lovely houseplant? And how much water to give?

The number 1 reason that plants don’t make it, is because of overwatering.

Watering too often can quickly be the end of your plant.

Many people say they water on a schedule, like every Sunday morning.

But how do you know your plant is thirsty every Sunday morning without first checking the soil?

What also happens a lot is that the plant is looking sad, so water is given. The next day it still doesn’t look happy, so watering again. And maybe again in another two days.

This is too much. And will only make things worse.


    </Text>
    </Card>
 )
}


class About extends Component {
   
    static navigationOptions = {
        title: 'I Wet My Plants'
    }
   
    render() {
        const renderPartner= ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description} 
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };

        return(
            <ScrollView> 
                <Mission />
                <Card title='Flower Power'>
                    <FlatList
                   data={this.props.partners.partners}
                   renderItem={renderPartner}
                   keyExtractor={item => item.id.toString()}
                    />

                </Card>
            </ScrollView>
        )
    }
}


export default connect(mapStateToProps)(About);