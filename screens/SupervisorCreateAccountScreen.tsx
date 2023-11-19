import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type SupervisorCreateAccountScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const SupervisorCreateAccountScreen: React.FC<SupervisorCreateAccountScreenProps> = ({ navigation }) => {

  const [supervisorName, setSupervisorName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string>('');
  const [supervisorNameError, setSupervisorNameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const handleCreateAccount = () => {
    setEmailError('');
    setPasswordError('');
    setSupervisorNameError('');
    
    if (!supervisorName || !email || !password) {
      // Check if any field is empty
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (!isValidEmail(email)) {
      // Check if email is valid
      setEmailError('Please enter a valid email address.');
    } else {
      // Implement your logic to create a supervisor account here
      // This is where you would make an API request or perform any necessary actions
      // After successfully creating the account, you can navigate to another screen
      // For example, you can navigate back to the Supervisor Home Screen
      navigation.navigate('LoginSupervisor' as keyof {});
    }
  };

  const isValidEmail = (email: string) => {
    // Basic email validation regex (you can use a more robust one)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create Supervisor Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Supervisor Name"
        onChangeText={(text) => setSupervisorName(text)}
        value={supervisorName}
      />
      <Text style={styles.errorText}>{supervisorNameError}</Text> {/* Display error message here */}

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
      <Text style={styles.errorText}>{passwordError}</Text> {/* Display error message here */}

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
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
  errorText: {
    color: 'red',
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
});

export default SupervisorCreateAccountScreen;
