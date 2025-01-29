import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={{color: Colors.white}}>This is the home screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: Colors.blackWithOpacity,
    padding: 16,
  },
});
