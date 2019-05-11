import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FormScreen from "./screens/FormScreen";
import ButtonScreen from "./screens/ButtonScreen";
import CarouselScreen from "./screens/CarouselScreen";
import FlatListScreen from "./screens/FlatListScreen";
import ListScreen from "./screens/ListScreen";
import ScreenA from "./screens/ScreenA";

const AppNavigator = createStackNavigator({
  Form: FormScreen,
  Button: ButtonScreen,
  Carousel: CarouselScreen,
  FlatList: FlatListScreen,
  List: ListScreen,
  ScreenA: ScreenA
});

export default createAppContainer(AppNavigator);