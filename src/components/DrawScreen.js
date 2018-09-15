import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNDraw from 'rn-draw'

export default class DrawSreen extends Component {
    static navigationOptions = { header: null };

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text>Draw Screen</Text>
                </View>
                <View style = {{flex:1}}>
                    <RNDraw
                        strokes={[]}
                        containerStyle={{backgroundColor: 'rgba(0,0,0,0.01)'}}
                        rewind={(undo) => {this._undo = undo}}
                        clear={(clear) => {this._clear = clear}}
                        color={'#001000'}
                        strokeWidth={4}
                        onChangeStrokes={(strokes) => console.log(strokes)}
                    />
                </View>

            </View>
            /*<Button onPress={this.save} title="Save" />*/
        )
    }
}