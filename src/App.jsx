import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FormScreen from "./screens/FormScreen";
import CarouselScreen from "./screens/CarouselScreen";
import ListScreen from "./screens/ListScreen";
import ScreenA from "./screens/ScreenA";

const AppNavigator = createStackNavigator({
  Form: FormScreen,
  Carousel: CarouselScreen,
  List: ListScreen,
  ScreenA: ScreenA
});

export default createAppContainer(AppNavigator);