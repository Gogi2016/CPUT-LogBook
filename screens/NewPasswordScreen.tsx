import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type NewPasswordScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const NewPasswordScreen: React.FC<NewPasswordScreenProps> = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleCreatePasswordPress = () => {
    // Check if both passwords are filled and match before proceeding
    if (isFormValid) {
      // Here, you can implement logic to update the user's password.
      // After updating the password, navigate to the Login screen.
      // For simplicity, we'll just navigate to the LoginScreen.
      navigation.navigate('LoginForm' as keyof {});
    } else {
      // Display an error message for incomplete or mismatched passwords
      alert('Please enter matching passwords in both fields.');
    }
  };

  const handleNewPasswordChange = (text: string) => {
    setNewPassword(text);
    validateForm(text, confirmPassword);
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    validateForm(newPassword, text);
  };

  const validateForm = (newPasswordText: string, confirmPasswordText: string) => {
    // Check if both passwords are filled and match
    const isValid = newPasswordText !== '' && confirmPasswordText !== '' && newPasswordText === confirmPasswordText;
    setIsFormValid(isValid);
  };

  return (
    <View style={styles.container}>
      <Text>Create a new password:</Text>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={handleNewPasswordChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />
      <Button title="Create New Password" onPress={handleCreatePasswordPress} disabled={!isFormValid} />
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
});

export default NewPasswordScreen;
 