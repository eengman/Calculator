import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { OpButton, Display } from "./../components";

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerDisplay}>
          <Display display={this.state.display} />
        </View>

        <View>
          <View style={styles.buttonRow}>
            <OpButton title="c" color="red" backgroundColor="yellow" />
            <OpButton title="+" color="red" backgroundColor="yellow" />
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
            <OpButton title="1" color="red" backgroundColor="yellow" />
            <OpButton title="2" color="red" backgroundColor="yellow" />
            <OpButton title="3" color="red" backgroundColor="yellow" />
            <OpButton title="4" color="red" backgroundColor="yellow" />
          </View>

          <View style={styles.buttonRow}>
            <OpButton title="5" color="red" backgroundColor="yellow" />
            <OpButton title="6" color="red" backgroundColor="yellow" />
            <OpButton title="7" color="red" backgroundColor="yellow" />
            <OpButton title="8" color="red" backgroundColor="yellow" />
          </View>

          <View style={styles.buttonRow}>
            <OpButton title="9" color="red" backgroundColor="yellow" />
            <OpButton title="0" color="red" backgroundColor="yellow" />
            <OpButton title="." color="red" backgroundColor="yellow" />
            <OpButton title="=" color="red" backgroundColor="yellow" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  containerDisplay: { flex: 1, justifyContent: "flex-end" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 10 },
});
