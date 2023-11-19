import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginSupervisorScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const LoginSupervisorScreen: React.FC<LoginSupervisorScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string>(''); // Add error state

  const handleLogin = () => {
    setEmailError(''); // Clear any previous error message

    if (!email || !password) {
      // Check if any field is empty
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (!isValidEmail(email)) {
      // Check if email is valid
      setEmailError('Please enter a valid email address.');
    } else {
      // Implement your logic to perform supervisor login here
      // This is where you would validate the email and password, make an API request, etc.
      // If login is successful, you can navigate to another screen (e.g., Supervisor Home)
      // If login fails, you can display an error message
      // For this example, let's assume successful login navigates to Supervisor Home
      navigation.navigate('StudentKey' as keyof {});
    }
  };

  const isValidEmail = (email: string) => {
    // Basic email validation regex (you can use a more robust one)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Supervisor Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address" // This will open the email keyboard
      />
      <Text style={styles.errorText}>{emailError}</Text> {/* Display error message here */}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: { // Define the errorText style
    color: 'red',
    marginBottom: 10,
  },
});
export default LoginSupervisorScreen