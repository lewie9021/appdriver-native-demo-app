import React from "react";
import { View, Text } from "react-native";
import Pressable from "../components/Pressable";
import setTestId from "../helpers/setTestId";

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
        <Pressable
          {...setTestId("button")}
          onPress={() => alert("Hello World!")}
        >
          <Text {...setTestId("button-text")}>
            Press Me!
          </Text>
        </Pressable>
        <Text {...setTestId("text")}>
          Hello World
        </Text>
      </View>
    );
  }
}

export default ButtonScreen;
