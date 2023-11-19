import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';


type ViewLogBookScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const ViewLogBookScreen: React.FC<ViewLogBookScreenProps> = ({ navigation }) => {
  const handleViewLogBookPress = () => {
    navigation.navigate('' as keyof {}); // Navigate to SupervisorCreateAccountScreen
};

  const handleNextPress = () => {
    navigation.navigate('RateScreen' as keyof{})// Add navigation logic for supervisor login here
  };



  return (
    <View style={styles.container}>
      <Button title="View LogBook" onPress={handleViewLogBookPress} />
      <Button title="Next" onPress={handleNextPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ViewLogBookScreen;

