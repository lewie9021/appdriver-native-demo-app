import React from "react";
import { Platform, View, TouchableOpacity, TouchableNativeFeedback } from "react-native";

const Pressable = ({style, children, ...props}) => Platform.select({
  ios: (
    <TouchableOpacity {...props}>
      <View style={style}>
        {children}
      </View>
    </TouchableOpacity>
  ),
  android: (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackground()}
      {...props}
    >
      <View style={style}>
        {children}
      </View>
    </TouchableNativeFeedback>
  )
});

export default Pressable;