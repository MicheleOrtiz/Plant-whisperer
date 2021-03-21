import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        plantsites: state.plantsites
    };
};


class Directory extends Component {
   
    static navigationOptions = {
        title: 'You Grow Girl'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <Tile
                title={item.name}
                caption={item.description}
                featured
                onPress={() => navigate('PlantsiteInfo', { plantsiteId: item.id })}
                imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };

        return (
            <FlatList
                data={this.props.plantsites.plantsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
            );
        }
    }

    export default connect(mapStateToProps)(Directory);