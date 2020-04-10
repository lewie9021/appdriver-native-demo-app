import React, { useLayoutEffect, useRef } from "react";
import { View, Dimensions, Animated } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";
import setTestId from "../helpers/setTestId";

const ZoomScreen = ({ navigation }) => {
  const scale = useRef(new Animated.Value(1));
  const { width } = Dimensions.get("window");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Zoom Screen"
    })
  }, []);

  const handleZoom = Animated.event([{
    nativeEvent: { scale: scale.current }
  }], { useNativeDriver: true });

  const handleZoomStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale.current, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    }
  };

  return (
    <View
      {...setTestId("zoom-screen")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <PinchGestureHandler
        onGestureEvent={handleZoom}
        onHandlerStateChange={handleZoomStateChange}
      >
        <Animated.Image
          {...setTestId("image")}
          source={require("../image.jpeg")}
          style={{
            width,
            height: 300,
            transform: [ { scale: scale.current } ]
          }}
          resizeMode="contain"
        />
      </PinchGestureHandler>
    </View>
  );
}

export default ZoomScreen;