import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginFormScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const LoginFormScreen: React.FC<LoginFormScreenProps> = ({ navigation }) => {
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  const handleLoginPress = async () => {
    try {
      const storedCredentials = await AsyncStorage.getItem('userCredentials');
      if (storedCredentials) {
        const { studentNumber: storedStudentNumber, password: storedPassword } = JSON.parse(storedCredentials);

        if (studentNumber === storedStudentNumber && password === storedPassword) {
          navigation.navigate('CreateLogBook' as keyof {});
        } else {
          Alert.alert('Error', 'Invalid credentials. Please try again.');
        }
      } else {
        Alert.alert('Error', 'No registered user found.');
      }
    } catch (error) {
      console.error('Error retrieving user credentials:', error);
    }
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword' as keyof {});
  };

  const handleStudentNumberChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setStudentNumber(numericText);
    validateInputs(numericText, password);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    validateInputs(studentNumber, text);
  };

  const validateInputs = (studentNumber: string, password: string) => {
    setIsLoginDisabled(!studentNumber || !password);
  };

  return (
    <View style={styles.container}>
      <Text>Student Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Student Number"
        value={studentNumber}
        onChangeText={handleStudentNumberChange}
      />

      <Text>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />

      <Button title="Login" onPress={handleLoginPress} disabled={isLoginDisabled} />

      <TouchableOpacity onPress={handleForgotPasswordPress}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
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
  forgotPasswordText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginFormScreen;

