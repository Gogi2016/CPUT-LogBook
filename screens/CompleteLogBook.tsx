import React, { useState, useRef } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Calendar } from 'react-native-calendars';

type StackParamList = {
  MonthSheetScreen1: undefined;
};

interface PlaceholderSquareProps {
  label: string;
  value: string | null;
  onPress: () => void;
}

const PlaceholderSquare: React.FC<PlaceholderSquareProps> = ({ label, value, onPress }) => (
  <View style={styles.placeholderContainer}>
    <Text onPress={onPress} style={styles.placeholderText}>
      {value ? `From: ${value}` : label}
    </Text>
  </View>
);

const CompleteLogBook = ({ navigation }: { navigation: StackNavigationProp<StackParamList> }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Monthly LogBook Sheet',
    });
  }, [navigation]);

  const [selectedFromDate, setSelectedFromDate] = useState<string>('');
  const [selectedToDate, setSelectedToDate] = useState<string>('');
  const [showCalendarFrom, setShowCalendarFrom] = useState<boolean>(false);
  const [showCalendarTo, setShowCalendarTo] = useState<boolean>(false);
  const currentDate = new Date();
  const minDate = `${currentDate.getFullYear() - 1}-01-01`;
  const maxDate = `${currentDate.getFullYear() + 1}-12-31`;

  const calendarFromRef = useRef<any>(null);
  const calendarToRef = useRef<any>(null);

  const handleNextPress = () => {
    navigation.navigate('MonthSheetScreen1');
  };

  const handleDatePressFrom = (day: any) => {
    const selectedDate = day.dateString;
    setSelectedFromDate(selectedDate);
    setShowCalendarFrom(false);
  };

  const handleDatePressTo = (day: any) => {
    const selectedDate = day.dateString;
    setSelectedToDate(selectedDate);
    setShowCalendarTo(false);
  };

  const toggleCalendarFrom = () => {
    setShowCalendarTo(false);
    setShowCalendarFrom(!showCalendarFrom);
  };

  const toggleCalendarTo = () => {
    setShowCalendarFrom(false);
    setShowCalendarTo(!showCalendarTo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Start & End Date</Text>

      <PlaceholderSquare
        label="From"
        value={selectedFromDate}
        onPress={toggleCalendarFrom}
      />

      {showCalendarFrom && (
        <Calendar
          style={styles.calendar}
          current={selectedFromDate || `${currentDate.getFullYear()}-${currentDate.getMonth() + 1 < 10 ? '0' : ''}${currentDate.getMonth() + 1}-01`}
          onDayPress={handleDatePressFrom}
          minDate={minDate}
          maxDate={maxDate}
          ref={calendarFromRef}
          hideExtraDays={true}
          markedDates={{ [selectedFromDate]: { selected: true } }}
        />
      )}

      <PlaceholderSquare
        label="To"
        value={selectedToDate}
        onPress={toggleCalendarTo}
      />

      {showCalendarTo && (
        <Calendar
          style={styles.calendar}
          current={selectedToDate || `${currentDate.getFullYear()}-${currentDate.getMonth() + 1 < 10 ? '0' : ''}${currentDate.getMonth() + 1}-01`}
          onDayPress={handleDatePressTo}
          minDate={minDate}
          maxDate={maxDate}
          ref={calendarToRef}
          hideExtraDays={true}
          markedDates={{ [selectedToDate]: { selected: true } }}
        />
      )}

      <Button title="Next" onPress={handleNextPress} disabled={!selectedFromDate || !selectedToDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  placeholderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: 'bold', // Make the text bold
    marginLeft: 8, // Add spacing between the text and the square
  },
  calendar: {
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
});

export default CompleteLogBook;

