import React from "react";
import { View } from "react-native";

const styles = {
  separator: {
    height: 1,
    backgroundColor: "lightgrey"
  }
};

const ListItemSeparator = () => (
  <View style={styles.separator} />
);

export default ListItemSeparator;