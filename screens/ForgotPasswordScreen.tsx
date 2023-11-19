import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type ForgotPasswordScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSendCodePress = () => {
    // Check if the email is valid before proceeding
    if (isEmailValid) {
      // Here, you can implement logic to send a verification code to the entered email.
      // For simplicity, we'll just navigate to the VerificationScreen.
      navigation.navigate('VerificationScreen' as keyof {});
    } else {
      // Display an error message for invalid email
      alert('Please enter a valid email address.');
    }
  };

  const handleEmailChange = (text: string) => {
    // Email validation using a regular expression
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const isValid = emailRegex.test(text);
    setIsEmailValid(isValid);
    setEmail(text);
  };

  return (
    <View style={styles.container}>
      <Text>Enter your email address to reset your password:</Text>
      <TextInput
        style={[styles.input, !isEmailValid && styles.inputError]} // Apply error style if email is invalid
        placeholder="Email Address"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <Button title="Send" onPress={handleSendCodePress} disabled={!isEmailValid} />
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

export default ForgotPasswordScreen;

