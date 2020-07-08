import React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import {Constants} from 'react-native-unimodules';

export default class AlertTest extends React.Component{
    displayAlert = () => {
        Alert.alert(
            'Attention',
            'This is a basic Alert component. Are you okay with it?',
            [
                {
                    text: 'Cancel',
                    onPress:() => console.log('cancelled'),
                    style: 'cancel',
                },
                {
                    text: 'Ok',
                    onPress:  () => console.log('Ok Pressed')
                },
            ],
            {cancelable: false}
        );
    };

    render(){
        return(
            <View style={styles.container}>
                <Button 
                    onPress={this.displayAlert}
                    title='Click here to see an Alert'
                />
            </View>
        )
    }


}

styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 45,
    }

})
