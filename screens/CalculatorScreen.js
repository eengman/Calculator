import React from "react";
import { View, Text, Button } from "react-native";
import { OpButton } from "./../components";

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.handle = this.handle.bind(this);
  }

  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <OpButton title="+" color="red" backgroundColor="yellow" />
        <OpButton title="-" color="red" backgroundColor="yellow" />
        <OpButton title="*" color="red" backgroundColor="yellow" />
        <OpButton title="/" color="red" backgroundColor="yellow" />
        <OpButton title="^" color="red" backgroundColor="yellow" />
      </View>
    );
  }

  handle() {
    console.log("click happened");
  }
}
