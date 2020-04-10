import React, { useLayoutEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MenuScreen from "./screens/MenuScreen";
// import FormScreen from "./screens/FormScreen";
// import CarouselScreen from "./screens/CarouselScreen";
// import FlatListScreen from "./screens/FlatListScreen";
// import ListScreen from "./screens/ListScreen";
import ButtonScreen from "./screens/ButtonScreen";
// import SwipeableScreen from "./screens/SwipeableScreen";
// import WebViewScreen from "./screens/WebViewScreen";
// import ZoomScreen from "./screens/ZoomScreen";
// import StorageScreen from "./screens/StorageScreen";
// import DatePickerScreen from "./screens/DatePickerScreen";

const Stack = createStackNavigator();

const App = () => {
  useLayoutEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#00CC00");
    }

    StatusBar.setBarStyle("light-content");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#00CC00",
            borderBottomWidth: 1,
            borderBottomColor: "#00B300"
          }
        }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        {/*<Stack.Screen name="Form" component={FormScreen} />*/}
        {/*<Stack.Screen name="Carousel" component={CarouselScreen} />*/}
        {/*<Stack.Screen name="FlatList" component={FlatListScreen} />*/}
        {/*<Stack.Screen name="List" component={ListScreen} />*/}
        <Stack.Screen name="Button" component={ButtonScreen} />
        {/*<Stack.Screen name="Swipeable" component={SwipeableScreen} />*/}
        {/*<Stack.Screen name="WebView" component={WebViewScreen} />*/}
        {/*<Stack.Screen name="Zoom" component={ZoomScreen} />*/}
        {/*<Stack.Screen name="Storage" component={StorageScreen} />*/}
        {/*<Stack.Screen name="DatePicker" component={DatePickerScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;