import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class OpButton extends React.Component {
  static defaultProps = {
    onPress: function () {},
    title: "",
    color: "white",
    backgroundColor: "black",
  };

  render() {
    var bc = this.props.backgroundColor;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.container, { backgroundColor: bc }]}
      >
        <Text style={[styles.text, { color: this.props.color }]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 25,
    margin: 10,
    padding: 5,
  },
  text: { fontSize: 25, fontWeight: "bold" },
});
