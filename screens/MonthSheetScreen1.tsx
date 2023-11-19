import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const MonthSheetScreen1 = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Monthly LogBook Sheet', // Set the title here
    });
  }, [navigation]);
   
  const [employer, setEmployer] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleNextPress = () => {
    // Check if any of the input fields are empty
    if (!employer || !address || !postalCode || !phoneNumber) {
      // Alert the user or handle the validation error as needed
      alert('Please fill in all fields before proceeding.');
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      // Check if the phone number doesn't contain exactly 10 digits
      alert('Phone number should contain exactly 10 digits.');
    } else {
      // All fields are filled and phone number is valid, navigate to the next screen
      navigation.navigate('MonthSheetScreen2', {
        employer,
        address,
        postalCode,
        phoneNumber,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Company Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Employer"
        value={employer}
        onChangeText={(text) => setEmployer(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        value={postalCode}
        onChangeText={(text) => setPostalCode(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text.replace(/\D/g, ''))}
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

export default MonthSheetScreen1;

