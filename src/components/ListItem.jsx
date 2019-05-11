import React from "react";
import { StyleSheet, Text } from "react-native";
import Pressable from "./Pressable";

const styles = {
  container: {
    padding: 16,
    backgroundColor: "white"
  },
  text: {
    color: "#414a4c"
  }
};

const ListItem = ({style, text, onPress, ...props}) => {
  return (
    <Pressable
      style={StyleSheet.flatten([styles.container, style])}
      onPress={onPress}
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ListItem;