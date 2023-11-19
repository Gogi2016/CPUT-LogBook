import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your app's stack navigator parameter list
type AppStackParamList = {
  MonthSheetScreen2: undefined;
  MonthSheetScreen3: {
    StudentName: string;
    StudentNumber: string;
    postalAddress: string;
    phoneNumber: string;
  };
  // Define other screens in your stack here
};

// Define the props type for MonthSheetScreen2
type MonthSheetScreen2Props = {
  navigation: StackNavigationProp<AppStackParamList, 'MonthSheetScreen2'>;
};

const MonthSheetScreen2: React.FC<MonthSheetScreen2Props> = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Monthly LogBook Sheet', // Set the title here
    });
  }, [navigation]);
  
  const [StudentName, setStudentName] = useState<string>('');
  const [StudentNumber, setStudentNumber] = useState<string>('');
  const [postalAddress, setPostalAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleNextPress = () => {
    // Check if all fields are filled
    if (StudentName && StudentNumber && postalAddress && phoneNumber) {
      // Check if the phone number has exactly 10 digits and if Student Number contains only numbers
      if (/^\d{10}$/.test(phoneNumber)) {
        // Handle the logic for the "Next" button
        // You can navigate to the next screen or perform any other action here
        // For example, you can pass the collected data to the next screen using navigation params.
        navigation.navigate('MonthSheetScreen3', {
          StudentName,
          StudentNumber,
          postalAddress,
          phoneNumber,
        });
      } else {
        // Display an error message for an invalid phone number
        alert('Please enter a valid 10-digit phone number.');
      }
    } else {
      // Display an error message for incomplete fields
      alert('Please fill in all fields.');
    }
  };

  const handleStudentNumberChange = (text: string) => {
    // Allow only numeric characters in the Student Number field
    const numericText = text.replace(/\D/g, '');
    setStudentNumber(numericText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={StudentName}
        onChangeText={(text: any) => setStudentName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Student Number"
        value={StudentNumber}
        onChangeText={handleStudentNumberChange} // Handle numeric input only
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Postal Address"
        value={postalAddress}
        onChangeText={(text: any) => setPostalAddress(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text: string) => setPhoneNumber(text.replace(/\D/g, ''))}
        keyboardType="numeric"
        maxLength={10}
      />

      <Button title="Next" onPress={handleNextPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default MonthSheetScreen2;
