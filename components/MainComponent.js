import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import PlantsiteInfo from './PlantsiteInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        PlantsiteInfo: { screen: PlantsiteInfo }
    }, 
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;