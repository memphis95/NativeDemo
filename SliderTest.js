import React from 'react';
import {View, Text, StyleSheet, Slider} from 'react-native'


export default class SliderTest extends React.Component {
    state = {
        sliderValue: 1000,
    }
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.paragraph}>
              Select the required price range using the slider.
            </Text>
            <Slider
              minimumValue={1000}
              maximumValue={5000}
              step={1}
              value={this.state.sliderValue}
              onSlidingComplete={value => {
                this.setState({ sliderValue: value });
              }}
            />
            <Text style={styles.paragraph}>
              Price selected: {this.state.sliderValue}
            </Text>
          </View>
        );
      }
} 

styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        paddingTop: 8,
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})