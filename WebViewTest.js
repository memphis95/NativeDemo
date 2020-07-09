import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import { WebView } from 'react-native-webview';

export default class App extends React.Component {
    render(){
        return(
            <WebView 
                originWhiteList = {['*']}
                source={{uri:'https://www.google.com/'}}
                style={{marginTop: 20}}
                /> 
                
        );
    }
}