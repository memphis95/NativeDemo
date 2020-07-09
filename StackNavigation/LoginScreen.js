import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { Constants } from "react-native-unimodules";

export default class LoginScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.paragraph}>Login Screen</Text>
                <Button
                    title="Home Page"
                    onPress={()=> this.props.navigation.navigate('Home')} />
            </View>

        )
    };
}

styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
    }
})