import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

const MonthSheetScreen3 = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Monthly LogBook Sheet', // Set the title here
    });
  }, [navigation]);
  
  const [workCategory, setWorkCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [timeInDaysWeek, setTimeInDaysWeek] = useState<string>('');

  const handleNextPress = () => {
    // Check if required fields are filled
    if (workCategory.trim() === '' || timeInDaysWeek.trim() === '' || description.trim() === '') {
      alert('Please fill in all required fields.'); // Display an alert if any of the required fields are empty
    } else {
      // All required fields are filled, navigate to the next screen
      navigation.navigate('MonthSheetScreen4', {
        workCategory,
        description,
        timeInDaysWeek,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Work Catergory</Text>

      <TextInput
        style={styles.input}
        placeholder="Work Category"
        value={workCategory}
        onChangeText={(text) => setWorkCategory(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Time in Days/Week"
        value={timeInDaysWeek}
        onChangeText={(text) => setTimeInDaysWeek(text)}
      />

      <TextInput
        style={styles.descriptionInput}
        placeholder="Description of Tasks Performed"
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        numberOfLines={4}
      />

      <Button title="Next" onPress={handleNextPress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 300,
    height: 40,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 300,
    height: 120,
    textAlignVertical: 'top',
  },
});

export default MonthSheetScreen3;



