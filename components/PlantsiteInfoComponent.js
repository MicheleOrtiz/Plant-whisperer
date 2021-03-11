import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { PLANTSITES } from '../shared/plantsites';
import { COMMENTS } from '../shared/comments';

function RenderPlantsite(props) {

    const {plantsite} = props;
    if (plantsite) {
        return (
            <Card 
                featuredTitle={plantsite.name}
                image={require('./images/gardening-girl.jpg')}
            >
                <Text style={{margin: 10}}>
                    {plantsite.description}
                </Text>
                <Icon
                    name={props.favorite ? 'leaf' : 'leaf-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


class PlantsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plantsites: PLANTSITES,
            comments: COMMENTS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Plantsite Information'
    }

    render() {
        const plantsiteId = this.props.navigation.getParam('plantsiteId');
        const plantsite = this.state.plantsites.filter(plantsite => plantsite.id === plantsiteId)[0];
        const comments = this.state.comments.filter(comment => comment.plantsiteId === plantsiteId);
        return (
            <ScrollView>
                <RenderPlantsite plantsite={plantsite} 
                favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
}

export default PlantsiteInfo;