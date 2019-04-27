import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CarouselScreen from "./screens/CarouselScreen";
import ListScreen from "./screens/ListScreen";
import ScreenA from "./screens/ScreenA";

const AppNavigator = createStackNavigator({
  Carousel: CarouselScreen,
  List: ListScreen,
  ScreenA: ScreenA
});

export default createAppContainer(AppNavigator);