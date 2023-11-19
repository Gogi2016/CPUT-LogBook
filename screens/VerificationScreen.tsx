import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type VerificationScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const VerificationScreen: React.FC<VerificationScreenProps> = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationCodeValid, setIsVerificationCodeValid] = useState(false);

  const handleSendNewPasswordPress = () => {
    // Check if the verification code is valid before proceeding
    if (isVerificationCodeValid) {
      // Here, you can implement logic to verify the entered code.
      // If the code is correct, navigate to the NewPasswordScreen.
      // For simplicity, we'll directly navigate to the NewPasswordScreen.
      navigation.navigate('NewPasswordScreen' as keyof {});
    } else {
      // Display an error message for an empty or invalid verification code
      alert('Please enter a valid verification code.');
    }
  };

  const handleVerificationCodeChange = (text: string) => {
    // Check if the verification code is not empty
    const isValid = text.trim() !== '';
    setIsVerificationCodeValid(isValid);
    setVerificationCode(text);
  };

  return (
    <View style={styles.container}>
      <Text>Enter the verification code sent to your email:</Text>
      <TextInput
        style={[styles.input, !isVerificationCodeValid && styles.inputError]} // Apply error style if code is empty
        placeholder="Verification Code"
        value={verificationCode}
        onChangeText={handleVerificationCodeChange}
      />
      <Button title="Send" onPress={handleSendNewPasswordPress} disabled={!isVerificationCodeValid} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  inputError: {
    borderColor: 'red',
  },
});

export default VerificationScreen;

