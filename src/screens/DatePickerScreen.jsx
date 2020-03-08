import React from "react";
import { View, Text, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from "../components/Button";
import setTestId from "../helpers/setTestId";

const isAndroid = Platform.OS == "android";
const isIos = Platform.OS == "ios";

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  text: {
    textAlign: "center",
    marginBottom: 32
  }
};

class DatePickerScreen extends React.Component {
  static navigationOptions = {
    title: "Date Picker Screen"
  };

  state = {
    date: new Date(),
    visible: isIos
  };

  formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return [
      day < 10 ? ("0" + day) : day,
      month < 10 ? ("0" + month) : month,
      year
    ].join("-");
  };

  handleDatePress = () => {
    this.setState({ visible: true });
  };

  handleDateChange = (e, nextDate) => {
    this.setState((prevState) => ({
      date: nextDate || prevState.date,
      visible: isIos
    }));
  };

  render() {
    const { date, visible } = this.state;

    return (
      <View
        {...setTestId("date-picker-screen")}
        style={styles.container}
      >
        <View>
          <Text
            {...setTestId("text")}
            style={styles.text}
          >
            Selected date: {this.formatDate(date)}
          </Text>
          {isAndroid && (
            <Button
              {...setTestId("select-date-button")}
              text="Select Date"
              onPress={this.handleDatePress}
            />
          )}
        </View>
        {visible && (
          <DateTimePicker
          testID="date-picker"
          value={date}
          mode="date"
          onChange={this.handleDateChange}
          />
        )}
      </View>
    );
  }
}

export default DatePickerScreen;
