import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, PanResponder } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RateScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const RateScreen: React.FC<RateScreenProps> = ({ navigation }) => {
  const qualities = [
    'Quality of Work',
    'Quantity of Work',
    'Responsibility',
    'Knowledge and Skill',
    'Motivation',
    'Communication',
  ];

  const [ratings, setRatings] = useState<number[]>(qualities.map(() => 5)); // Default ratings for each quality

  const handleRatingChange = (index: number, rating: number) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handleNextPress = () => {
    // You can navigate to the next screen or perform any necessary action here
    navigation.navigate('CommentsFromtheSupScreen' as keyof {}); // Replace 'NextScreen' with the actual screen name
  };

  const createPanResponder = (index: number) => {
    let previousRating = 5; // Initial rating value
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const scaleValue = Math.max(0, Math.min(300, gestureState.moveX)); // Adjust the max value based on your layout
        const rating = Math.round((scaleValue / 300) * 9) + 1; // Calculate rating between 1 and 10
        if (rating !== previousRating) {
          previousRating = rating;
          handleRatingChange(index, rating);
        }
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rate Student's Work</Text>
      {qualities.map((quality, index) => (
        <View key={index} style={styles.qualityContainer}>
          <Text>{quality}</Text>
          <View {...createPanResponder(index).panHandlers}>
            <View style={styles.slider}>
              <View
                style={[
                  styles.sliderLine,
                  { width: ((ratings[index] - 1) / 9) * 300 }, // Adjust the width based on your layout
                ]}
              ></View>
            </View>
          </View>
          <Text>{ratings[index]}</Text>
        </View>
      ))}
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
  qualityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  slider: {
    flex: 1,
    height: 20,
    backgroundColor: '#ccc',
  },
  sliderLine: {
    height: '100%',
    backgroundColor: 'blue', // Adjust the color as needed
  },
});

export default RateScreen;
