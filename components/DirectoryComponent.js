import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { PLANTSITES } from '../shared/plantsites';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantsites: PLANTSITES
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('PlantsiteInfo', { plantsiteId: item.id })}
                    leftAvatar={{ source: require('./images/gardening-girl.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.plantsites}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
        }
    }

export default Directory;