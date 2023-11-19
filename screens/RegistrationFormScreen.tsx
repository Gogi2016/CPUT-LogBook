import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RegistrationFormScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const RegistrationFormScreen: React.FC<RegistrationFormScreenProps> = ({ navigation }) => {
  const [studentNumber, setStudentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string>('');
  const [studentNumberError, setStudentNumberError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleRegister = async () => {
    setEmailError('');
    setPasswordError('');
    setStudentNumberError('');

    if (!studentNumber || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      try {
        // Store user credentials
        await AsyncStorage.setItem('userCredentials', JSON.stringify({ studentNumber, email, password }));
        navigation.navigate('LoginForm' as keyof {});
      } catch (error) {
        console.error('Error storing user credentials:', error);
      }
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStudentNumber = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setStudentNumber(numericText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register Student</Text>

      <TextInput
        style={styles.input}
        placeholder="Student Number"
        onChangeText={validateStudentNumber}
        value={studentNumber}
        keyboardType="numeric"
      />
      <Text style={styles.errorText}>{studentNumberError}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <Text style={styles.errorText}>{emailError}</Text>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Text style={styles.errorText}>{passwordError}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%', // Adjust padding for smaller screens
  },
  headerText: {
    fontSize: 24,
    marginBottom: '5%', // Adjust margin for smaller screens
  },
  input: {
    width: '90%', // Adjust input width
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: '3%', // Adjust margin for smaller screens
  },
  errorText: {
    color: 'red',
    marginBottom: '3%', // Adjust margin for smaller screens
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: '3%', // Adjust button height
    paddingHorizontal: '10%', // Adjust button width
    borderRadius: 5,
    marginVertical: '5%', // Adjust margin for smaller screens
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegistrationFormScreen