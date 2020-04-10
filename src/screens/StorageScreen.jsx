import React, { useLayoutEffect, useEffect, useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Card from "../components/Card";
import Button from "../components/Button";
import setTestId from "../helpers/setTestId";

const StorageScreen = ({ navigation }) => {
  const [ count, setCount ] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Storage Screen"
    })
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("count")
      .then(setCount);
  }, []);

  return (
    <View
      {...setTestId("storage-screen")}
    >
      <Card padding={true}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 32
          }}
        >
          {count}
        </Text>
        <Button
          {...setTestId("save-button")}
          text="Save"
          onPress={() => {
            const count = "5";

            AsyncStorage.setItem("count", count)
              .then(() => AsyncStorage.getItem("count"))
              .then(setCount);
          }}
        />
      </Card>
    </View>
  );
}

export default StorageScreen;