import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type CreateLogBookScreenProps = {
  navigation: StackNavigationProp<{}>; // Assuming you don't have any route parameters
};

const CreateLogBookScreen: React.FC<CreateLogBookScreenProps> = ({ navigation }) => {
  const handleCompleteLogBookPress = () => {
    // Implement your logic for completing the logbook here
    // This is where you can navigate to the screen for completing the logbook
    // For demonstration purposes, we'll just show an alert
    navigation.navigate('CompleteLogBook' as keyof {})
  };

  const handleViewLogBookPress = () => {
    // Implement your logic for viewing the logbook here
    // This is where you can navigate to the screen for viewing the logbook
    // For demonstration purposes, we'll just show an alert
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create LogBook</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleCompleteLogBookPress}>
        <Text style={styles.buttonText}>Complete LogBook</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleViewLogBookPress}>
        <Text style={styles.buttonText}>View LogBook</Text>
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

export default CreateLogBookScreen;

