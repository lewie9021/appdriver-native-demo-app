import React from "react";
import { View } from "react-native";

const Card = ({ padding, children }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingTop: 16,
        paddingRight: padding ? 16 : 0,
        paddingBottom: 16,
        paddingLeft: padding ? 16 : 0,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginBottom: 16
      }}
    >
      {children}
    </View>
  );
};

export default Card;