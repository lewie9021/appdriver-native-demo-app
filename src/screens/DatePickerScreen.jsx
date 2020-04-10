import React, { useLayoutEffect, useState } from "react";
import { View, Text, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Card from "../components/Card";
import Button from "../components/Button";
import setTestId from "../helpers/setTestId";

const isAndroid = Platform.OS === "android";
const isIos = Platform.OS === "ios";

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return [
    day < 10 ? ("0" + day) : day,
    month < 10 ? ("0" + month) : month,
    year
  ].join("-");
};

const DatePickerScreen = ({ navigation }) => {
  const [ date, setDate ] = useState(new Date());
  const [ visible, setVisible ] = useState(isIos);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Date Picker Screen"
    })
  }, []);

  const handleDateChange = (e, nextDate) => {
    if (isAndroid) {
      setVisible(false);
    }

    if (nextDate) {
      setDate(nextDate);
    }
  };

  return (
    <View {...setTestId("date-picker-screen")}>
      <Card padding={true}>
        <View>
          <Text
            {...setTestId("text")}
            style={{
              textAlign: "center",
              marginBottom: 32
            }}
          >
            Selected date: {formatDate(date)}
          </Text>
          {isAndroid && (
            <Button
              {...setTestId("select-date-button")}
              text="Select Date"
              onPress={() => setVisible(true)}
            />
          )}
        </View>
        {visible && (
          <DateTimePicker
            testID="date-picker"
            value={date}
            mode="date"
            onChange={handleDateChange}
          />
        )}
      </Card>
    </View>
  );
}

export default DatePickerScreen;
