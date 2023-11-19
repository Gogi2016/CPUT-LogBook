import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

const SupvSignScreen = ({ navigation }: any) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      
    });
  }, [navigation]);

  const [signature, setSignature] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

  const handleSignatureChange = (text: string) => {
    setSignature(text);
    checkSubmitButtonState(text, date);
  };

  const handleDateChange = (text: string) => {
    setDate(text);
    checkSubmitButtonState(signature, text);
  };

  const checkSubmitButtonState = (signatureText: string, dateText: string) => {
    // Check if both signature and date are filled correctly
    const signatureValid = signatureText.trim() !== '';
    const dateValid = /^\d{2}-\d{2}-\d{4}$/.test(dateText); // Check if the date matches the format DD-MM-YYYY

    setIsSubmitDisabled(!signatureValid || !dateValid);
  };

  const handleSubmitLogBookPress = () => {
    navigation.navigate('' as keyof {});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Signature and Date</Text>

      <View style={styles.signatureContainer}>
        <Text style={styles.signatureLabel}>Signature</Text>
        <TextInput
          style={styles.signatureInput}
          placeholder="Enter signature"
          value={signature}
          onChangeText={handleSignatureChange}
        />
      </View>

      <TextInput
        style={styles.dateInput}
        placeholder="DD-MM-YYYY"
        value={date}
        onChangeText={handleDateChange}
      />

      <Button
        title="Submit LogBook"
        onPress={handleSubmitLogBookPress}
        disabled={isSubmitDisabled} // Disable the button when fields are not filled correctly
      />
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
  signatureContainer: {
    marginBottom: 20,
  },
  signatureLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  signatureInput: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    width: 300,
    height: 40,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    width: 300,
    height: 40,
  },
});

export default SupvSignScreen;