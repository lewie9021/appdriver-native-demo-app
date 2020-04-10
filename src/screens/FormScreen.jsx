import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, ScrollView, Switch, Alert } from "react-native";
import Slider from "@react-native-community/slider";
import Card from "../components/Card";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import setTestId from "../helpers/setTestId";

const FormScreen = ({ navigation }) => {
  const [ text, setText ] = useState("");
  const [ slider, setSlider ] = useState(0);
  const [ switcher, setSwitcher ] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Form Screen"
    })
  }, []);

  return (
    <SafeAreaView
      {...setTestId("form-screen")}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
      >
        <Card padding={true}>
          <TextInput
            {...setTestId("text-input")}
            style={{ marginBottom: 20 }}
            value={text}
            onChangeText={setText}
          />
          <Slider
            {...setTestId("slider-input")}
            style={{ flex: 1, height: 40, marginBottom: 20 }}
            value={slider}
            onValueChange={setSlider}
            minimumValue={0}
            maximumValue={1}
            step={0.1}
            minimumTrackTintColor="#0000FF"
            maximumTrackTintColor="#000000"
          />
          <Switch
            {...setTestId("switch")}
            style={{ marginBottom: 20 }}
            value={switcher}
            onValueChange={setSwitcher}
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
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FormScreen;
