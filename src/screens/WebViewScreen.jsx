import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import setTestId from "../helpers/setTestId";

const WebViewScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "WebView Screen"
    })
  }, []);

  return (
    <View
      {...setTestId("webview-screen")}
      style={{ flex: 1 }}
    >
      <WebView
        source={{ uri: "https://google.com" }}
      />
    </View>
  );
}

export default WebViewScreen;