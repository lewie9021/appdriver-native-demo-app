import React from "react";
import { SafeAreaView, ScrollView, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import setTestId from "../helpers/setTestId";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

class FormScreen extends React.Component {
  static navigationOptions = {
    title: "Form Screen"
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
            // textContentType="password"
            // autoCompleteType="password"
            // secureTextEntry={true}
          />
          <Slider
            {...setTestId("slider-input")}
            style={{ flex: 1, height: 40, marginBottom: 20 }}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
            minimumTrackTintColor="#0000FF"
            maximumTrackTintColor="#000000"
          />
          <Switch
            {...setTestId("switch")}
            style={{ marginBottom: 20 }}
            value={true}
          />
          <Button
            {...setTestId("button")}
            // disabled={true}
            // accessibilityStates={["disabled"]} // Required for enabled attribute to work.
            text="Button"
            onPress={() => alert("Tap")}
            onLongPress={() => alert("Long Press")}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FormScreen;
