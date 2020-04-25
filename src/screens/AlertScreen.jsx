import React, { useLayoutEffect } from "react";
import { ScrollView, Alert } from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";
import setTestId from "../helpers/setTestId";

const ButtonScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Alert Screen"
    })
  }, []);

  return (
    <ScrollView
      {...setTestId("alert-screen")}
      style={{ flex: 1 }}
    >
      <Card padding={true}>
        <Button
          {...setTestId("alert-button")}
          style={{ marginBottom: 16 }}
          text="Show Alert"
          onPress={() => {
            Alert.alert("Alert", "Hello World!");
          }}
        />
        <Button
          {...setTestId("confirm-alert-button")}
          style={{ marginBottom: 16 }}
          text="Show Confirm Alert"
          onPress={() => {
            Alert.alert("Alert", "Hello World!", [
              {
                text: "Cancel",
                style: "cancel",
                onPress: () => Alert.alert("Alert", "Cancelled!")
              },
              {
                text: "OK",
                onPress: () => Alert.alert("Alert", "Accepted!")
              }
            ]);
          }}
        />
        <Button
          {...setTestId("prompt-button")}
          text="Show Prompt"
          onPress={() => {
            Alert.prompt("Prompt", "Enter value", [
              { text: "Cancel", style: "destructive" },
              { text: "OK" }
            ])
          }}
        />
      </Card>
    </ScrollView>
  );
}

export default ButtonScreen;
