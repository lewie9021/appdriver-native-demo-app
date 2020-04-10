import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { SwipeRow } from "react-native-swipe-list-view";
import Card from "../components/Card";
import Pressable from "../components/Pressable";
import setTestId from "../helpers/setTestId";

const styles = {
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

const SwipeableScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Swipeable Screen"
    })
  }, []);

  return (
    <View {...setTestId("swipeable-screen")}>
      <Card>
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
      </Card>
    </View>
  );
}

export default SwipeableScreen;