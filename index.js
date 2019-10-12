// https://github.com/facebook/react-native/issues/26626
import "react-native-gesture-handler";

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/App";

AppRegistry.registerComponent(appName, () => App);
