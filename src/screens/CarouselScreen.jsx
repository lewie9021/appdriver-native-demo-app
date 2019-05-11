import React from "react";
import { Dimensions, StyleSheet, ScrollView, View, Text } from "react-native";
import setTestId from "../helpers/setTestId";

const styles = {
  pageContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 128,
    fontWeight: "bold",
    color: "white"
  }
};

const Page = ({number, style, ...props}) => (
  <View
    style={StyleSheet.flatten([styles.pageContainer, style])}
    {...props}
  >
    <Text style={styles.text}>
      {number}
    </Text>
  </View>
);

class CarouselScreen extends React.Component {
  static navigationOptions = {
    title: "Carousel Screen",
  };

  render() {
    return (
      <View
        {...setTestId("carousel-screen")}
        style={{flex: 1}}
      >
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          pagingEnabled={true}
        >
          <Page
            {...setTestId("page-one")}
            style={{backgroundColor: "#FF8080"}}
            number={1}
          />
          <Page
            {...setTestId("page-two")}
            style={{backgroundColor: "#90EE90"}}
            number={2}
          />
          <Page
            {...setTestId("page-three")}
            style={{backgroundColor: "#ADD8E6"}}
            number={3}
          />
        </ScrollView>
      </View>
    );
  }
}

export default CarouselScreen;
