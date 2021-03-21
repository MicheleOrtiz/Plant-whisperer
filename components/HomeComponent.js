import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        plantsites: state.plantsites,
        promotions: state.promotions,
        partners: state.partners
    };
};


function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{uri: baseUrl + item.image}}>
            
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    static navigationOptions = {
        title: 'Gardening is My Therapy'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.plantsites.plantsites.filter(plantsite => plantsite.featured)[0]}
                />
                <RenderItem
                    item={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem
                    item={this.props.partners.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

                
export default connect(mapStateToProps)(Home);