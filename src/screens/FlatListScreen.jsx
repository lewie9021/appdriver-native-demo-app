import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import setTestId from "../helpers/setTestId";
import ListItem from "../components/ListItem";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey"
  }
};

const createList = (count) => {
  let result = [];

  for (let i = 0; i < count; i += 1) {
    result.push({
      key: i.toString(),
      text: `Item ${i + 1}`
    });
  }

  return result;
};

class FlatListScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Flat List Screen",
    headerTitleStyle: {
      flex: 1,
      textAlign: "center",
      alignSelf:'center'
    }
  });

  render() {
    const list = createList(30);

    return (
      <SafeAreaView
        {...setTestId("flatlist-screen")}
        style={styles.container}
      >
        <FlatList
          data={list}
          renderItem={({item}) => (
            <ListItem
              text={item.text}
              onPress={() => {}}
            />
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
        />
      </SafeAreaView>
    );
  }
}

export default FlatListScreen;

