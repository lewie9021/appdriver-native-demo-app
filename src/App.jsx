import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MenuScreen from "./screens/MenuScreen";
import FormScreen from "./screens/FormScreen";
import CarouselScreen from "./screens/CarouselScreen";
import FlatListScreen from "./screens/FlatListScreen";
import ListScreen from "./screens/ListScreen";
import ButtonScreen from "./screens/ButtonScreen";
import SwipeableScreen from "./screens/SwipeableScreen";
import WebViewScreen from "./screens/WebViewScreen";
import ZoomScreen from "./screens/ZoomScreen";
import StorageScreen from "./screens/StorageScreen";

StatusBar.setBackgroundColor("#00CC00");
StatusBar.setBarStyle("light-content");

const routes = {
  Menu: MenuScreen,
  Form: FormScreen,
  Carousel: CarouselScreen,
  FlatList: FlatListScreen,
  List: ListScreen,
  Button: ButtonScreen,
  Swipeable: SwipeableScreen,
  WebView: WebViewScreen,
  Zoom: ZoomScreen,
  Storage: StorageScreen
};

const AppNavigator = createStackNavigator(routes, {
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#00CC00",
      borderBottomWidth: 1,
      borderBottomColor: "#00B300"
    },
    headerTintColor: "white"
  }
});

export default createAppContainer(AppNavigator);