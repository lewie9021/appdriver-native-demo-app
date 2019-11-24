# AppDriver Native Demo App

A simple React Native demo app containing sample screens to demonstrate common scenarios.

![Menu Screen Screenshot](./assets/menu-screen-screenshot.png "Menu Screen Screenshot")
![Form Screen Screenshot](./assets/form-screen-screenshot.png "Form Screen Screenshot")
![Carousel Screen Screenshot](./assets/carousel-screen-screenshot.png "Carousel Screen Screenshot")

## Getting Started

> Note: Be sure you have installed the package dependencies (`yarn install`).

To simply automate the demo app you will need to do one of the following:

**iOS (Simulator)**

```
yarn sim:ios:release
```

You can find the output .app asset at `./ios/build/NativeDemoApp/Build/Products/Release-iphonesimulator/NativeDemoApp.app`.

**Android (Emulator or Device)**

```
yarn sim:android:release
```

You can find the output .apk asset at `./android/app/build/outputs/apk/release/app-release.apk`.

## Steps To Create

Install React Native template
```
npx react-native-cli init NativeDemoApp --version 0.61.2
```

Install React Navigation dependencies
```
yarn add \
  react-navigation@4.0.10 \
  react-native-gesture-handler@1.4.1 \
  react-native-reanimated@1.3.0 \
  react-native-screens@1.0.0-alpha.23 \
  react-navigation-stack@1.9.4
```

Configure Android `app/build.gradle` for Navigation. Add the following to the `dependencies` section.
```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

Configure Android `MainActivity.java` for Navigation. Add the following to the imports and the class respectively:
```
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

```
@Override
protected ReactActivityDelegate createReactActivityDelegate() {
  return new ReactActivityDelegate(this, getMainComponentName()) {
    @Override
    protected ReactRootView createRootView() {
      return new RNGestureHandlerEnabledRootView(MainActivity.this);
    }
  };
}
```

Install Slider dependency (now it has been exacted from RN core)
```
yarn add @react-native-community/slider@2.0.2
```

Install Swipe List View dependency
```
yarn add react-native-swipe-list-view@2.0.3
```

Install WebView dependency.
```
yarn add react-native-webview@7.4.3
```

Install Async Storage dependency.
```
yarn add @react-native-community/async-storage@1.6.3
```

Update metro.config.js to enable .jsx file extension
```
resolver: {
  sourceExts: ["jsx", "js", "json"]
}
```

To finish, replace template files with source code (be sure to replace index.js and remove App.js).
