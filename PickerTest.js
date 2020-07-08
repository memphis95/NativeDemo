import React from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import { Constants } from "react-native-unimodules";

export default class PickerTest extends React.Component {
  constructor() {
    super();
    this.state = {
      framework: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Select the JS library/framework to learn
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.framework}
          onValueChange={(fw) => this.setState({ framework: fw })}
        >
          <Picker.Item label="Angular" value="Angular" />
          <Picker.Item label="React JS" value="React JS" />
          <Picker.Item label="Ember JS" value="Ember JS" />
          <Picker.Item label="Vue JS" value="Vue JS" />
        </Picker>
        {this.state.framework!=''?
        <Text>You Selected {this.state.framework}</Text>: null}
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  picker: {
    width: 200,
    borderColor: "black",
    borderWidth: 3,
  },
});
