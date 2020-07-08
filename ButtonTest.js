import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class ButtonTest extends React.Component {
    constructor() {
       super();
       this.state = {
           isClicked: false,
       } ;
    }
    handleClick = () => {
        this.setState({
            isClicked: true,
        });
    };

    render() {
        return(
            <View style={styles.conatiner}>
                <View style={styles.itemContainer}>
                    <Text style={styles.textStyles}>Customized Button</Text>
                    <Text style={{paddingBottom: 15}}>
                        {' '}
                        This is a cusyomized button using TouchableOpacity wrapper
                    </Text>
                    {this.state.isClicked ? (
                        <Text style={styles.textStyles}>Button Clicked</Text>
                    ): null}
                    <TouchableOpacity style={styles.btnStyles}
                    onPress={this.handleClick}>
                        <Text style={{color:'white', fontWeight:'bold'}}>Click Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

styles = StyleSheet.create({
    conatiner: {
        flex:1,
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 25,
        padding:15,
    },
    textStyles: {
        fontWeight: 'bold',
        alignItems:'center',
    },
    btnStyles: {
        backgroundColor: 'red',
        alignItems: 'center',
        padding: 10
    }


})