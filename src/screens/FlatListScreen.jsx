import React, { useLayoutEffect, useMemo } from "react";
import { FlatList } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";
import createList from "../helpers/createList";

const FlatListScreen = ({ navigation }) => {
  const insets = useSafeArea();
  const list = useMemo(() => createList(100), []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "FlatList Screen"
    })
  }, []);

  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: insets.bottom }}
      data={list}
      renderItem={({item}) => (
        <ListItem
          text={item.text}
          onPress={() => {}}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      ListFooterComponent={ListItemSeparator}
    />
  );
}

export default FlatListScreen;

