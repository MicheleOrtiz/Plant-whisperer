import React, { Component } from 'react';
import { ScrollView, Text} from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }
    sendMail() {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
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
                 <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#2e8b57', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;