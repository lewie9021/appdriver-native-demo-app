#!/usr/bin/env bash

# Install shell of application.
npx react-native-cli init NativeDemoApp --version 0.59.5

cd NativeDemoApp

# Install React Navigation.
yarn add \
  react-navigation \
  react-native-gesture-handler

yarn react-native link react-native-gesture-handler

# TODO: Auto implement manual Android changed documented here:
# https://reactnavigation.org/docs/en/getting-started.html#installation

read -p $'To complete the installation, *replace* the \'android\' and \'ios\' directories of the application with the newly created directories found within ./NativeDemoApp.'