import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SwipeRow } from "react-native-swipe-list-view";
import Pressable from "../components/Pressable";
import setTestId from "../helpers/setTestId";

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    justifyContent: "center",
    height: 50,
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#FF0000",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  backText: {
    textAlign: "center",
    color: "#FFFFFF"
  }
};

class SwipeableScreen extends React.Component {
  static navigationOptions = {
    title: "Swipeable Screen"
  };

  render() {
    return (
      <SafeAreaView
        {...setTestId("swipeable-screen")}
        style={styles.container}
      >
        <View {...setTestId("list-item")}>
          <SwipeRow
            disableRightSwipe={true}
            rightOpenValue={-85}
          >
            <View style={styles.rowBack}>
              <View />
              <Pressable
                {...setTestId("remove-button")}
                onPress={() => alert("Remove")}
              >
                <Text style={styles.backText}>Remove</Text>
              </Pressable>
            </View>
            <View style={styles.rowFront}>
              <Text>List Item</Text>
            </View>
          </SwipeRow>
        </View>
      </SafeAreaView>
    );
  }
}

export default SwipeableScreen;