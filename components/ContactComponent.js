import React, { Component } from 'react';
import { ScrollView, Text} from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }
    render() {
        return(
            <ScrollView>
                <Card 
                 title="Contact Information" 
                 wrapperStyle={{margin: 20}}
                >
                 <Text>3682 Greenhouse Way</Text>  
                 <Text>Atlanta, Ga 30144</Text>
                 <Text style={{marginBottom: 10}}>U.S.A.</Text> 
                 <Text>Phone: 1-678-327-4505</Text>
                 <Text>Email: Flowerpower@gmail.com</Text>
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;