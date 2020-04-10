import React, { useLayoutEffect } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import setTestId from "../helpers/setTestId";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey"
  }
};

const list = [
  {
    testId: "list-item-form-screen",
    text: "Form Screen",
    routeName: "Form"
  },
  {
    testId: "list-item-carousel-screen",
    text: "Carousel Screen",
    routeName: "Carousel"
  },
  {
    testId: "list-item-flatlist-screen",
    text: "FlatList Screen",
    routeName: "FlatList"
  },
  {
    testId: "list-item-list-screen",
    text: "List Screen",
    routeName: "List"
  },
  {
    testId: "list-item-button-screen",
    text: "Button Screen",
    routeName: "Button"
  },
  {
    testId: "list-item-swipeable-screen",
    text: "Swipeable Screen",
    routeName: "Swipeable"
  },
  {
    testId: "list-item-webview-screen",
    text: "WebView Screen",
    routeName: "WebView"
  },
  {
    testId: "list-item-zoom-screen",
    text: "Zoom Screen",
    routeName: "Zoom"
  },
  {
    testId: "list-item-storage-screen",
    text: "Storage Screen",
    routeName: "Storage"
  },
  {
    testId: "list-item-date-picker-screen",
    text: "Date Picker Screen",
    routeName: "DatePicker"
  }
];

const MenuScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Menu"
    })
  }, []);

  return (
    <View
      {...setTestId("menu-screen")}
      style={styles.container}
    >
      <FlatList
        data={list}
        renderItem={({item}) => (
          <ListItem
            {...setTestId(item.testId)}
            text={item.text}
            onPress={() => navigation.navigate(item.routeName)}
          />
        )}
        keyExtractor={(item) => item.testId}
        ItemSeparatorComponent={ListItemSeparator}
        ListFooterComponent={<ListItemSeparator />}
      />
    </View>
  );
}

export default MenuScreen;