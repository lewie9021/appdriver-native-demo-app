import React from "react";
import { View, Text } from "react-native";
import setTestId from "../helpers/setTestId";
import Button from "../components/Button";

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  text: {
    textAlign: "center",
    marginTop: 16
  }
};

class ButtonScreen extends React.Component {
  static navigationOptions = {
    title: "Button Screen"
  };

  render() {
    return (
      <View
        {...setTestId("button-screen")}
        style={styles.container}
      >
        <Button
          text="Press Me!"
          onPress={() => alert("Hello World!")}
        />
        <Text
          {...setTestId("text")}
          style={styles.text}
        >
          Hello World
        </Text>
      </View>
    );
  }
}

export default ButtonScreen;
