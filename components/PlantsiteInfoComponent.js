import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Share } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        plantsites: state.plantsites,
        comments: state.comments,
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: plantsiteId => (postFavorite(plantsiteId))
};

function RenderPlantsite(props) {

    const {plantsite} = props;
   
    const sharePlantsite = (title, message, url) => {
        Share.share({
            title: title,
            message: `${title}: ${message} ${url}`,
            url: url
        },{
            dialogTitle: 'Share ' + title
        });
    };

    if (plantsite) {
        return (
            <Card 
                featuredTitle={plantsite.name}
                image={{uri: baseUrl + plantsite.image}}>
            
                <Text style={{margin: 10}}>
                    {plantsite.description}
                </Text>
                <Icon
                    name={props.favorite ? 'leaf' : 'leaf-o'}
                    type='font-awesome'
                    color='#ffa07a'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
                 <Icon
                            name={'share'}
                            type='font-awesome'
                            color='#2e8b57'
                            raised
                            reverse
                            onPress={() => sharePlantsite(plantsite.name, plantsite.description, baseUrl + plantsite.image)} 
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
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Tips'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


class PlantsiteInfo extends Component {

    markFavorite(plantsiteId) {
        this.props.postFavorite(plantsiteId);
    }

    static navigationOptions = {
        title: 'Gardening Tips'
    }

    render() {
        const plantsiteId = this.props.navigation.getParam('plantsiteId');
        const plantsite = this.props.plantsites.plantsites.filter(plantsite => plantsite.id === plantsiteId)[0];
        const comments = this.props.comments.comments.filter(comment => comment.plantsiteId === plantsiteId);
        return (
            <ScrollView>
                <RenderPlantsite plantsite={plantsite}
                    favorite={this.props.favorites.includes(plantsiteId)}
                    markFavorite={() => this.markFavorite(plantsiteId)}
                />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlantsiteInfo);