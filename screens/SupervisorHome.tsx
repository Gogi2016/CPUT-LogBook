import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type SupervisorHomeScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const SupervisorHomeScreen: React.FC<SupervisorHomeScreenProps> = ({ navigation }) => {
  const handleCreateAccountPress = () => {
    navigation.navigate('SupervisorCreateAccount' as keyof {}); // Navigate to SupervisorCreateAccountScreen
};

  const handleLoginPress = () => {
    navigation.navigate('LoginSupervisor' as keyof{})// Add navigation logic for supervisor login here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Supervisor Home</Text>

      <TouchableOpacity style={styles.button} onPress={handleCreateAccountPress}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
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

export default SupervisorHomeScreen;
