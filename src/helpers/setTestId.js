import { Platform } from "react-native";

const setTestId = (testId) => {
  if (!testId) {
    return null;
  }

  return Platform.OS === "ios"
    ? {testID: testId}
    : {testID: testId, accessibilityLabel: testId};
};

export default setTestId;