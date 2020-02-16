import * as React from "react";
import { View, Dimensions, Animated } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import setTestId from "../helpers/setTestId";

const { width } = Dimensions.get("window");

class ZoomScreen extends React.Component {
  static navigationOptions = {
    title: "Zoom Screen"
  };

  scale = new Animated.Value(1);

  onZoomEvent = Animated.event([ {
    nativeEvent: { scale: this.scale }
  }], { useNativeDriver: true });

  onZoomStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    }
  };

  render() {
    return (
      <View
        {...setTestId("zoom-screen")}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <PinchGestureHandler
          onGestureEvent={this.onZoomEvent}
          onHandlerStateChange={this.onZoomStateChange}
        >
          <Animated.Image
            {...setTestId("image")}
            source={require("../image.jpeg")}
            style={{
              width,
              height: 300,
              transform: [ { scale: this.scale } ]
            }}
            resizeMode="contain"
          />
        </PinchGestureHandler>
      </View>
    );
  }
}

export default ZoomScreen;