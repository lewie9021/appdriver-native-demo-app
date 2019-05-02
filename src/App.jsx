import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FormScreen from "./screens/FormScreen";
import CarouselScreen from "./screens/CarouselScreen";
import FlatListScreen from "./screens/FlatListScreen";
import ListScreen from "./screens/ListScreen";
import ScreenA from "./screens/ScreenA";

const AppNavigator = createStackNavigator({
  List: ListScreen,
  Form: FormScreen,
  Carousel: CarouselScreen,
  FlatList: FlatListScreen,
  ScreenA: ScreenA
});

export default createAppContainer(AppNavigator);