import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

  
type StudentKeyScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const StudentKeyScreen: React.FC<StudentKeyScreenProps> = ({ navigation }) => {
  const [studentKey, setStudentKey] = useState('');

  const handleSubmitPress =()=>{
    // Do data starage..
    navigation.navigate('ViewLogBook' as keyof {})
  };

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Enter student unique key"
      value={studentKey}
      onChangeText= {value=>setStudentKey(value)}
      />
      <Button
      title = "Submit"
      onPress={handleSubmitPress}
      />
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
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default StudentKeyScreen;
