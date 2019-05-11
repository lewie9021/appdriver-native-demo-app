import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import setTestId from "../helpers/setTestId";
import createList from "../helpers/createList";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";

const styles = {
  container: {
    flex: 1
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "lightgrey"
  }
};

class FlatListScreen extends React.Component {
  static navigationOptions = {
    title: "FlatList Screen",
  };

  renderItem = ({item}) => (
    <ListItem
      text={item.text}
      onPress={() => {}}
    />
  );

  render() {
    const list = createList(100);

    return (
      <View
        {...setTestId("flatlist-screen")}
        style={styles.container}
      >
        <FlatList
          data={list}
          renderItem={this.renderItem}
          ItemSeparatorComponent={ListItemSeparator}
          ListFooterComponent={() => (
            <SafeAreaView>
              <ListItemSeparator />
            </SafeAreaView>
          )}
        />
      </View>
    );
  }
}

export default FlatListScreen;

