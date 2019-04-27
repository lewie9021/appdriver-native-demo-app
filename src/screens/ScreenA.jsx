import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import setTestId from "../helpers/setTestId";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    backgroundColor: "blue",
    width: 200,
    height: 200
  }
};

class ScreenA extends React.Component {
  static navigationOptions = () => ({
    title: "Screen A",
  });

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
          <View {...setTestId("box")} style={styles.box} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ScreenA;
