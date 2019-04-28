import React from "react";
import { StyleSheet, TextInput as RNTextInput } from "react-native";

const TextInput = ({style, ...props}) => (
  <RNTextInput
    style={StyleSheet.flatten([
      {padding: 8, borderColor: 'gray', borderWidth: 1, borderRadius: 2},
      style
    ])}
    {...props}
  />
);

export default TextInput;