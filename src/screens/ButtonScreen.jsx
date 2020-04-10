import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";
import setTestId from "../helpers/setTestId";

const ButtonScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Button Screen"
    })
  }, []);

  return (
    <ScrollView
      {...setTestId("button-screen")}
      style={{ flex: 1 }}
    >
      <Card padding={true}>
        <Button
          {...setTestId("button")}
          text="Press Me!"
          onPress={() => alert("Hello World!")}
        />
      </Card>
    </ScrollView>
  );
}

export default ButtonScreen;
