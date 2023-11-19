import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
