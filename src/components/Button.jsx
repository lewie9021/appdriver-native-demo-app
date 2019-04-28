import React from "react";
import { Text } from "react-native";
import Pressable from "./Pressable";

const Button = ({text, onPress, ...props}) => {
  return (
    <Pressable
      {...props}
      style={{
        padding: 16,
        backgroundColor: "blue",
        borderRadius: 2
      }}
      onPress={onPress}
    >
      <Text style={{fontWeight: "bold", textAlign: "center", color: "white"}}>{text}</Text>
    </Pressable>
  )
};

export default Button;