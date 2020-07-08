import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Constants } from 'react-native-unimodules';
import { TextInput } from 'react-native-gesture-handler';

export default class UIComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
        };
    }
    onChangeText(value) {
        this.setState({
            name: value,
        });
    }

    render(){
        return(
            <View 
            style = {styles.container}>
                <TextInput style={styles.box} onChangeText={(value)=>{
                    this.onChangeText(value);
                }} />
                <Text 
                style={{
                    alignSelf:'center'
                }}>
                    Hello {this.state.name}
                </Text>
            </View>
        )
    };
}
styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#ecf0f1",
    },
    box: {
        borderRadius: 5,
        borderColor : 'gray',
        borderWidth:1,
        width:200
    }
})