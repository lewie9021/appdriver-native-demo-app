import React from "react";
import { SafeAreaView, ScrollView, TextInput } from "react-native";
import setTestId from "../helpers/setTestId";

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
            style={{padding: 8, borderColor: 'gray', borderWidth: 1}}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FormScreen;
