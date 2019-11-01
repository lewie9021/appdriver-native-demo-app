import React from "react";
import { View } from "react-native";
import setTestId from "../helpers/setTestId";
import WebView from "react-native-webview";

const styles = {
  container: {
    flex: 1
  },
};

class WebViewScreen extends React.Component {
  static navigationOptions = {
    title: "WebView Screen"
  };

  render() {
    return (
      <View
        {...setTestId("webview-screen")}
        style={styles.container}
      >
        <WebView
          source={{ uri: "https://google.com" }}
        />
      </View>
    );
  }
}

export default WebViewScreen;