import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";

import Button from "../components/Button";
import setTestId from "../helpers/setTestId";

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

const ButtonScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Button Screen"
    })
  }, []);

  return (
    <View
      {...setTestId("button-screen")}
      style={styles.container}
    >
      <Button
        {...setTestId("button")}
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

export default ButtonScreen;
