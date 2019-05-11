import React, { Fragment } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import setTestId from "../helpers/setTestId";
import createList from "../helpers/createList";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItem from "../components/ListItem";

const styles = {
  container: {
    flex: 1
  }
};

class FlatListScreen extends React.Component {
  static navigationOptions = {
    title: "List Screen"
  };

  render() {
    const list = createList(30);

    return (
      <View
        {...setTestId("list-screen")}
        style={styles.container}
      >
        <ScrollView>
          {list.map((item, index) => (
            <Fragment key={item.key}>
              {index ? <ListItemSeparator /> : null}
              <ListItem
                {...setTestId(item.testId)}
                text={item.text}
                onPress={() => alert(item.text)}
              />
            </Fragment>
          ))}
          <SafeAreaView>
            <ListItemSeparator />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

export default FlatListScreen;
