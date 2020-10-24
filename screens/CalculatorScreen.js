import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { OpButton, Display } from "./../components";

export default class CalculatorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      inputString: "",
      operatorPressed: false,
      firstInput: 0,
      lastOperatorPressed: "",
      input: 0,
    };
  }

  onNumberPress = (num) => {
    // basic
    let inputVal = (this.state.input * 10) + num;
    this.setState({ input: inputVal });

    // complex
    this.setState({ inputString: this.state.inputString + num.toString() });
  };

  onClearPress = () => {
    this.setState({ input: 0, firstInput: 0, inputString: "" });
  };

  onOperatorPress = (op) => {

    this.setState({ firstInput: this.state.input });
    this.setState({ input: 0 });

    if (op === "+") {
      this.setState({ lastOperatorPressed: "addition" });
    }

    if (op === "-") {
      this.setState({ lastOperatorPressed: "subtraction" });
    }

    if (op === "*") {
      this.setState({ lastOperatorPressed: "multiplication" });
    }

    if (op === "/") {
      this.setState({ lastOperatorPressed: "division" });
    }

    if (op === "^") {
      this.setState({ lastOperatorPressed: "exponent" });
    }

    if (op === "sin") {
      this.setState({ lastOperatorPressed: "sin" });
    }

    if (op === "cos") {
      this.setState({ lastOperatorPressed: "cos" });
    }

    if (op === "tan") {
      this.setState({ lastOperatorPressed: "tan" });
    }

    if (op === "cot") {
      this.setState({ lastOperatorPressed: "cot" });
    }

    if (op === "ln") {
      this.setState({ lastOperatorPressed: "ln" });
    }

    if (op === "log") {
      this.setState({ lastOperatorPressed: "log" });
    }

    // complex
    this.setState({ inputString: this.state.inputString + op });

  };

  infixToPostfix = () => {
    let infixString = this.state.inputString;
    let postfixString = "";
    let infixStack = [];

    // precedence
    var precedence = function (operator) {
      switch (operator) {
        case "^": return 3;
        case "*":
        case "/": return 2;
        case "+":
        case "-": return 1;
        default: return 0;
      }
    }

    for (var i = 0; i < infixString.length; i++) {
      var c = infixString.charAt(i);

      if (!isNaN(parseInt(c))) {
        postfixString += c;
      } else if (c === "+" || c === "-" || c === "*" || c === "/" || c === "^") {
        while (c != "^" && (infixStack.length > 0) && (precedence(c) <= precedence(infixStack[infixStack.length - 1]))) {
          postfixString += infixStack.pop();
        }
        infixStack.push(c);
      }
    }
    while (infixStack.length > 0) {
      postfixString += infixStack.pop();
    }

    console.log(postfixString);
    this.evaluate(postfixString);

  }

  evaluate = (postfixString) => {

    var powerOf = function (a, b) {
      let val = a;
      let returnVal = 1;
      var i;
      for (i = b; i > 0; i--) {
        returnVal *= val;
      }
      return returnVal;
    }

    let stack = [];

    for (var i = 0; i < postfixString.length; i++) {
      var c = postfixString.charAt(i);
      if (!isNaN(parseInt(c))) {
        stack.push(parseInt(c));
      } else if (stack.length > 0) {
        console.log(stack);
        var b = parseInt(stack.pop());
        var a = parseInt(stack.pop());
        var result;
        console.log(c);
        if (c === "*") {
          result = a * b;
        } else if (c === "-") {
          result = a - b;
        } else if (c === "^") {
          result = powerOf(b, a);
        } else if (c === "/") {
          result = a / b;
        } else if (c === "+") {
          result = a + b;
        }
        stack.push(result);

      } else {
        // handle paretheses
      }
    }

    this.setState({ inputString: result });

  }

  powerOf = (a, b) => {

    let val = a;
    let returnVal = 1;
    var i;
    for (i = b; i > 0; i--) {
      returnVal *= val;
    }

    return returnVal;
  }


  onEqualPress = () => {
    //this.infixToPostfix();



    if (this.state.lastOperatorPressed === "sin") {
      let val = Math.sin(this.state.input);
      this.setState({ inputString: val });
    } else if (this.state.lastOperatorPressed === "cos") {
      let val = Math.cos(this.state.input);
      this.setState({ inputString: val });
    } else if (this.state.lastOperatorPressed === "tan") {
      let val = Math.tan(this.state.input);
      this.setState({ inputString: val });
    } else if (this.state.lastOperatorPressed === "cot") {
      let val = Math.cos(this.state.input) / Math.sin(this.state.input);
      this.setState({ inputString: val });
    } else if (this.state.lastOperatorPressed === "ln") {
      let val = Math.log(this.state.input);
      this.setState({ inputString: val });
    } else if (this.state.lastOperatorPressed === "log") {
      let val = Math.log10(this.state.input);
      this.setState({ inputString: val });
    } else {
      this.infixToPostfix();
    }



  };



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerDisplay}>
          <Display display={this.state.inputString} />
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
            <OpButton onPress={() => {
              this.onOperatorPress("-");
            }}
              title="-" color="red" backgroundColor="yellow" />

            <OpButton onPress={() => {
              this.onOperatorPress("*");
            }} title="*" color="red" backgroundColor="yellow" />
          </View>

          <View style={styles.buttonRow}>
            <OpButton onPress={() => {
              this.onOperatorPress("/");
            }} title="/" color="red" backgroundColor="yellow" />

            <OpButton onPress={() => {
              this.onOperatorPress("^");
            }} title="^" color="red" backgroundColor="yellow" />

            <OpButton onPress={() => {
              this.onOperatorPress("sin");
            }} title="sin" color="red" backgroundColor="yellow" />
            <OpButton onPress={() => {
              this.onOperatorPress("cos");
            }} title="cos" color="red" backgroundColor="yellow" />
          </View>

          <View style={styles.buttonRow}>
            <OpButton onPress={() => {
              this.onOperatorPress("tan");
            }} title="tan" color="red" backgroundColor="yellow" />
            <OpButton onPress={() => {
              this.onOperatorPress("cot");
            }} title="cot" color="red" backgroundColor="yellow" />
            <OpButton onPress={() => {
              this.onOperatorPress("ln");
            }} title="ln" color="red" backgroundColor="yellow" />
            <OpButton onPress={() => {
              this.onOperatorPress("log");
            }} title="log" color="red" backgroundColor="yellow" />
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
