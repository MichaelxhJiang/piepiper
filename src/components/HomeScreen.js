import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = { header: null };

    render() {
        return (
            <View>
                <Text>Hello world!</Text>
                <Button title = "Draw" onPress={() => this.props.navigation.navigate('Draw')}/>
            </View>
        )
    }
}