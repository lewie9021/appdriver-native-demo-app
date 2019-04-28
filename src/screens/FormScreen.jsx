import React from "react";
import { SafeAreaView, ScrollView, Slider } from "react-native";
import setTestId from "../helpers/setTestId";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

class FormScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Form Screen",
    headerTitleStyle: {
      flex: 1,
      textAlign: "center",
      alignSelf:'center'
    }
  });

  render() {
    return (
      <SafeAreaView
        {...setTestId("form-screen")}
        style={{flex: 1}}
      >
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{padding: 16}}
        >
          <TextInput
            {...setTestId("text-input")}
            style={{marginBottom: 20}}
          />
          <Slider
            {...setTestId("slider-input")}
            style={{flex: 1, height: 40}}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
            minimumTrackTintColor="#0000FF"
            maximumTrackTintColor="#000000"
          />
          <Button
            {...setTestId("button")}
            text="Button"
            onPress={() => alert("Hello World!")}
            onLongPress={() => alert("Helloooooo World!")}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FormScreen;
