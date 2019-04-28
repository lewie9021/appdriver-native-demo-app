import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
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
          <Button
            {...setTestId("button")}
            text="Button"
            onPress={() => alert("Hello World!")}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FormScreen;
