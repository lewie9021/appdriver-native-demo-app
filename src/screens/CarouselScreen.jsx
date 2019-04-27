import React from "react";
import { Dimensions, SafeAreaView, ScrollView, View } from "react-native";
import setTestId from "../helpers/setTestId";

const styles = {
  pageContainer: (backgroundColor) => ({
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor,
    justifyContent: "center",
    alignItems: "center"
  }),
  box: (color) => ({
    backgroundColor: color,
    width: 200,
    height: 200
  })
};

const Page = ({backgroundColor, color, ...props}) => (
  <View {...props} style={styles.pageContainer(backgroundColor)}>
    <View
      style={styles.box(color)}
    />
  </View>
);

class CarouselScreen extends React.Component {
  static navigationOptions = () => ({
    title: "Carousel Screen",
  });

  render() {
    return (
      <SafeAreaView
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
            backgroundColor="#FF8080"
            color="#FF0000"
          />
          <Page
            {...setTestId("page-two")}
            backgroundColor="#90EE90"
            color="#00FF00"
          />
          <Page
            {...setTestId("page-three")}
            backgroundColor="#ADD8E6"
            color="#0000FF"
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CarouselScreen;
