import React from "react";
import { SafeAreaView, ScrollView, Switch, Alert } from "react-native";
import Slider from "@react-native-community/slider";
import setTestId from "../helpers/setTestId";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

class FormScreen extends React.Component {
  static navigationOptions = {
    title: "Form Screen"
  };

  state = {
    text: "",
    slider: 0,
    switch: false
  };

  render() {
    return (
      <SafeAreaView
        {...setTestId("form-screen")}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 16 }}
        >
          <TextInput
            {...setTestId("text-input")}
            style={{ marginBottom: 20 }}
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
          />
          <Slider
            {...setTestId("slider-input")}
            style={{ flex: 1, height: 40, marginBottom: 20 }}
            value={this.state.slider}
            onValueChange={(value) => this.setState({ slider: value })}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
            minimumTrackTintColor="#0000FF"
            maximumTrackTintColor="#000000"
          />
          <Switch
            {...setTestId("switch")}
            style={{ marginBottom: 20 }}
            value={this.state.switch}
            onValueChange={(value) => this.setState({ switch: value })}
            accessibilityRole="switch" // Due to a bug in RN. See: https://github.com/facebook/react-native/issues/26873
          />
          <Button
            {...setTestId("button")}
            text="Button"
            onPress={(e) => {
              Alert.alert(
                "Tap",
                JSON.stringify({
                  x: e.nativeEvent.locationX,
                  y: e.nativeEvent.locationY
                }, null, 2))
            }}
            onLongPress={(e) => {
              Alert.alert(
                "Long Press",
                JSON.stringify({
                  x: e.nativeEvent.locationX,
                  y: e.nativeEvent.locationY
                }, null, 2))
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FormScreen;
