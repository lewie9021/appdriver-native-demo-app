# AppDriver Native Demo App

Contains sample screens to demonstrate common scenarios.

## Steps To Create

Install React Native template
```
npx react-native-cli init NativeDemoApp --version 0.61.2
```
Install React Navigation dependencies
```
yarn add \
  react-navigation@3.11.1 \
  react-native-gesture-handler@1.3.0 \
  react-native-reanimated@1.2.0
```
Install Slider dependency (now it has been exacted from RN core)
```
yarn add @react-native-community/slider@2.0.2
```
Update metro.config.js to enable .jsx file extension
```
resolver: {
  sourceExts: ["jsx", "js", "json"]
}
```
To finish, replace template files with source code (be sure to replace index.js and remove App.js).
