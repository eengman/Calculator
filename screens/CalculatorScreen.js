import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { OpButton, Display } from "./../components";

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      operatorPressed: false,
      runningTotal: 0,
      firstInput: 0,
      secondInput: 0,
      lastOperatorPressed: "",
      result: 0,
      input: 0,
    };
  }

  onNumberPress = (num) => {
    let inputVal = (this.state.input * 10) + num;
    this.setState({ input: inputVal });
  };

  onClearPress = () => {
    this.setState({ input: 0, firstInput: 0 });
  };

  onOperatorPress = (op) => {

    this.setState({ firstInput: this.state.input });
    this.setState({ input: 0 });

    if (op === "+") {
      this.setState({ lastOperatorPressed: "addition" });
    }


  };


  onEqualPress = () => {

    if (this.state.lastOperatorPressed === "addition") {
      let val = this.state.firstInput + this.state.input;
      this.setState({ input: val });
    }

  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerDisplay}>
          <Display display={this.state.input} />
        </View>

        <View>
          <View style={styles.buttonRow}>
            <OpButton
              onPress={() => {
                this.onClearPress();
              }}
              title="c"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton
              onPress={() => {
                this.onOperatorPress("+");
              }}
              title="+"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton title="-" color="red" backgroundColor="yellow" />
            <OpButton title="*" color="red" backgroundColor="yellow" />
          </View>

          <View style={styles.buttonRow}>
            <OpButton title="/" color="red" backgroundColor="yellow" />
            <OpButton title="^" color="red" backgroundColor="yellow" />
            <OpButton title="sin" color="red" backgroundColor="yellow" />
            <OpButton title="cos" color="red" backgroundColor="yellow" />
          </View>

          <View style={styles.buttonRow}>
            <OpButton title="tan" color="red" backgroundColor="yellow" />
            <OpButton title="cot" color="red" backgroundColor="yellow" />
            <OpButton title="ln" color="red" backgroundColor="yellow" />
            <OpButton title="log" color="red" backgroundColor="yellow" />
          </View>

          <View style={styles.buttonRow}>
            <OpButton
              onPress={() => {
                this.onNumberPress(1);
              }}
              title="1"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton
              onPress={() => {
                this.onNumberPress(2);
              }}
              title="2"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton
              onPress={() => {
                this.onNumberPress(3);
              }}
              title="3"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton
              onPress={() => {
                this.onNumberPress(4);
              }}
              title="4"
              color="red"
              backgroundColor="yellow"
            />
          </View>

          <View style={styles.buttonRow}>
            <OpButton
              onPress={() => {
                this.onNumberPress(5);
              }}
              title="5"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton
              onPress={() => {
                this.onNumberPress(6);
              }}
              title="6"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton
              onPress={() => {
                this.onNumberPress(7);
              }}
              title="7"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton
              onPress={() => {
                this.onNumberPress(8);
              }}
              title="8"
              color="red"
              backgroundColor="yellow"
            />
          </View>

          <View style={styles.buttonRow}>
            <OpButton
              onPress={() => {
                this.onNumberPress(9);
              }}
              title="9"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton
              onPress={() => {
                this.onNumberPress(0);
              }}
              title="0"
              color="red"
              backgroundColor="yellow"
            />
            <OpButton title="." color="red" backgroundColor="yellow" />
            <OpButton
              onPress={() => {
                this.onEqualPress();
              }}
              title="="
              color="red"
              backgroundColor="yellow"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  containerDisplay: { flex: 1, justifyContent: "flex-end" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 10 },
});
