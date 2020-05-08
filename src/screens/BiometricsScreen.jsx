import React, { useLayoutEffect, useEffect, useState } from "react";
import { View } from "react-native";
import * as Keychain from "react-native-keychain";

import Card from "../components/Card";
import Button from "../components/Button";
import setTestId from "../helpers/setTestId";

const BiometricsScreen = ({ navigation }) => {
  const [ saved, setSaved ] = useState(false);
  const options = {
    accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
    securityLevel: Keychain.SECURITY_LEVEL.SECURE_SOFTWARE,
    storage: Keychain.STORAGE_TYPE.RSA,
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Biometrics Screen"
    })
  }, []);

  useEffect(() => {
    Keychain.getSupportedBiometryType()
      .then((x) => alert(JSON.stringify(x)))

    Keychain.resetGenericPassword(options)
      .then(() => {
        Keychain.setGenericPassword("username", "password", options)
          .then(() => setSaved(true))
          .catch(() => alert("Failed to save."));
      });

  }, []);

  if (!saved) {
    return null;
  }

  return (
    <View {...setTestId("biometrics-screen")}>
      <Card padding={true}>
        <Button
          {...setTestId("login-button")}
          text="Login"
          onPress={() => {
            Keychain.getGenericPassword()
              .then((creds) => alert("Successfully logged in. " + JSON.stringify(creds)))
              .catch(() => alert("Failed to login."));
          }}
        />
      </Card>
    </View>
  );
}

export default BiometricsScreen;