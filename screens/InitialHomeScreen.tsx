import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type InitialHomeScreenProps = {
    navigation: StackNavigationProp<{}>;
  };
  
  const InitialHomeScreen: React.FC<InitialHomeScreenProps> = ({ navigation }) => {
    const handleLoginAsStudentPress = () => {
      navigation.navigate('Home' as keyof {}); // Navigate to your existing HomeScreen for students
    };
  
    const handleLoginAsSupervisorPress = () => {
      navigation.navigate('SupervisorHome' as keyof {});// You can navigate to a different screen for supervisors here
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Login As</Text>
  
        <TouchableOpacity style={styles.button} onPress={handleLoginAsStudentPress}>
          <Text style={styles.buttonText}>Login As Student</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.button} onPress={handleLoginAsSupervisorPress}>
          <Text style={styles.buttonText}>Login As Supervisor</Text>
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
  
  export default InitialHomeScreen;

