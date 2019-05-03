import React, { Fragment } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
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
      testId: `list-item-${i}`,
      text: `Item ${i + 1}`
    });
  }

  return result;
};

class FlatListScreen extends React.Component {
  static navigationOptions = () => ({
    title: "List Screen",
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
        {...setTestId("list-screen")}
        style={styles.container}
      >
        <ScrollView>
          {list.map((item, index) => (
            <Fragment key={item.key}>
              {index ? <View style={styles.separator} /> : null}
              <ListItem
                {...setTestId(item.testId)}
                text={item.text}
                onPress={() => alert(item.text)}
              />
            </Fragment>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default FlatListScreen;
