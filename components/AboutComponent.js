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
    <Card title="How to Water Propagate Plants and Make New Plants for Free!"> 
<Text>Did you know you can propagate cuttings from your plant and make more plants? Rooting houseplants in water is the easiest way to propagate your plants. New plants for free! And it is so easy, you don’t need a green thumb! Increase your indoor plant collection and fill your home with your own water propagated plants. Self-propagated plants are perfect low cost, but thoughtful gifts for friends, fellow plant lovers, and family.


    </Text>
    </Card>
 )
}


class About extends Component {
   
    static navigationOptions = {
        title: " Propagation Tips"
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
                <Card title="I'm rooting for you!">
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