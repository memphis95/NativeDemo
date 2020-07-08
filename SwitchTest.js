import React from 'react'
import {View, Switch, Text, StyleSheet } from 'react-native'
import { Constants } from 'react-native-unimodules';

export default class SwitchTest extends React.Component {

    state = {
        showName: false,
    };
    onSwitchChange(value) {
        this.setState({
            showName: !this.state.showName,
        });
    }
    render() {
        return (
            <View style={styles.conatiner} >
                <Text>This is a boolean switch</Text>
                <Switch
                    value={this.state.showName}
                    onValueChange={value=>this.onSwitchChange(value)}
                />
            </View>
        );
    }
}

styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8
    }
})