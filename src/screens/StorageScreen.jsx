import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import setTestId from "../helpers/setTestId";
import Button from "../components/Button";

class StorageScreen extends React.Component {
  static navigationOptions = {
    title: "Storage Screen"
  };

  state = {
    count: null
  };

  componentDidMount() {
    return AsyncStorage.getItem("count")
      .then((x) => this.setState({ count: x }));
  }

  render() {
    return (
      <View
        {...setTestId("storage-screen")}
        style={{ flex: 1, justifyContent: "center", padding: 16 }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 32}}>{this.state.count}</Text>
        <Button
          {...setTestId("save-button")}
          text="Save"
          onPress={() => {
            const count = "5";

            AsyncStorage.setItem("count", count)
              .then(() => this.setState({ count }));
          }}
        />
      </View>
    );
  }
}

export default StorageScreen;