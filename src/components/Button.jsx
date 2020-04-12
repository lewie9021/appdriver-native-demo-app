import React from "react";
import { Text } from "react-native";
import Pressable from "./Pressable";

const styles = {
  container: {
    padding: 16,
    backgroundColor: "blue",
    borderRadius: 2
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  }
};

const Button = ({ style, text, onPress, ...props }) => (
  <Pressable
    style={{ ...styles.container, ...style }}
    onPress={onPress}
    {...props}
  >
    <Text style={styles.text}>
      {text}
    </Text>
  </Pressable>
);

export default Button;