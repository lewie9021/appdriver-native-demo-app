import React, { Fragment, useLayoutEffect, useMemo } from "react";
import { ScrollView } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";
import createList from "../helpers/createList";
import setTestId from "../helpers/setTestId";

const ListScreen = ({ navigation }) => {
  const insets = useSafeArea();
  const list = useMemo(() => createList(30), []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "List Screen"
    })
  }, []);

  return (
    <ScrollView
      {...setTestId("list-screen")}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    >
      {list.map((item) => (
        <Fragment key={item.key}>
          <ListItem
            {...setTestId(item.testId)}
            text={item.text}
            onPress={() => alert(item.text)}
          />
          <ListItemSeparator />
        </Fragment>
      ))}
    </ScrollView>
  );
}

export default ListScreen;
