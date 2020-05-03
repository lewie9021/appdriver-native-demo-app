# AppDriver Native Demo App

A simple React Native demo app containing sample screens to demonstrate common scenarios.

![Menu Screen Screenshot](./assets/menu-screen-screenshot.png "Menu Screen Screenshot")
![Form Screen Screenshot](./assets/form-screen-screenshot.png "Form Screen Screenshot")
![Carousel Screen Screenshot](./assets/carousel-screen-screenshot.png "Carousel Screen Screenshot")

## Getting Started

> Note: Be sure you have installed the package dependencies (`yarn install`) and installed Pods (`cd ios && pod install && cd ..`).

To simply automate the demo app you will need to do one of the following:

**iOS (Simulator)**

```bash
yarn sim:ios:release
```

You can find the output .app asset at `./ios/build/NativeDemoApp/Build/Products/Release-iphonesimulator/NativeDemoApp.app`.

**Android (Emulator or Device)**

```bash
yarn sim:android:release
```

You can find the output .apk asset at `./android/app/build/outputs/apk/release/app-release.apk`.

## Steps To Create

Install React Native template
```bash
npx react-native-cli init NativeDemoApp --version 0.61.5
```

Install React Navigation dependencies
```bash
yarn add \
  @react-navigation/native@5.1.5 \
  @react-navigation/stack@5.2.10 \
  react-native-reanimated@1.8.0 \
  react-native-gesture-handler@1.6.1 \
  react-native-screens@2.4.0 \
  react-native-safe-area-context@0.7.3 \
  @react-native-community/masked-view@0.1.7
```

To support .jsx file extensions and make React Navigation work. Update `metro.config.js`:
```
resolver: {
  sourceExts: ["jsx", "tsx", "js", "ts", "json"]
}
```

Configure React Native Gesture Handler for navigation. Add the following to `index.js`:
```
import "react-native-gesture-handler";
```

Install Slider dependency (now it has been exacted from RN core)
```bash
yarn add @react-native-community/slider@2.0.2
```

Install Swipe List View dependency.
```bash
yarn add react-native-swipe-list-view@2.0.3
```

Install WebView dependency.
```bash
yarn add react-native-webview@7.4.3
```

Install Async Storage dependency.
```bash
yarn add @react-native-community/async-storage@1.6.3
```

Install Date Time Picker dependency.
```bash
yarn add @react-native-community/datetimepicker@2.2.3
```

Install React Native Keychain dependency.
```bash
yarn add react-native-keychain@6.0.0
```

To support Face ID, add the following to `ios/NativeDemoApp/Info.plist`:
```xml
<key>NSFaceIDUsageDescription</key>
<string>Face ID is used to unlock your saved credentials</string>
```

Add support for automating Android WebViews by adding the following to `onCreate` within `MainApplication.java`:
```java
WebView.setWebContentsDebuggingEnabled(true);
```

To finish, replace template files with source code (be sure to replace index.js and remove App.js).
