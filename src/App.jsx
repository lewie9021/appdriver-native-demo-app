import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListScreen from "./screens/ListScreen";
import ScreenA from "./screens/ScreenA";

const AppNavigator = createStackNavigator({
  List: ListScreen,
  ScreenA: ScreenA
});

export default createAppContainer(AppNavigator);