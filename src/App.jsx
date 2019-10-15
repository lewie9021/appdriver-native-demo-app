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

StatusBar.setBackgroundColor("#00CC00");
StatusBar.setBarStyle("light-content");

const routes = {
  Menu: MenuScreen,
  Form: FormScreen,
  Carousel: CarouselScreen,
  FlatList: FlatListScreen,
  List: ListScreen,
  Button: ButtonScreen
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