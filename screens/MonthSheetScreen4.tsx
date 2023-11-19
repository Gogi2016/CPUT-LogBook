import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

const MonthSheetScreen4 = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Monthly LogBook Sheet', // Set the title here
    });
  }, [navigation]);
  
  const [comments, setComments] = useState<string>('');

  const handleNextPress = () => {
    // Check if the comments field is empty or contains only whitespace
    if (comments.trim() === '') {
      alert('Please enter comments before proceeding.'); // Display an alert if the comments field is empty
    } else {
      // Comments are filled, navigate to the next screen
      navigation.navigate('MonthSheetScreen5'); // Replace 'NextScreenName' with the actual name of the next screen
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Comments from Students on the above Tasks</Text>

      <TextInput
        style={styles.commentsInput}
        placeholder="Enter comments here"
        value={comments}
        onChangeText={(text) => setComments(text)}
        multiline={true}
        numberOfLines={6} // You can adjust the number of lines as needed
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
  commentsInput: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 300,
    height: 200, // Adjust the height to accommodate more text if needed
    textAlignVertical: 'top', // Allows multiline text to start from the top
  },
});

export default MonthSheetScreen4;

