import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const GetStartButton = () => {
  const navigation = useNavigation();

  const route = ['Home'];

  const handleNavigation = () => {
    navigation.navigate(...(route as never));
  };

  return (
    <View>
      <TouchableOpacity onPress={handleNavigation} style={styles.startButton}>
        <Text style={styles.startButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  startButton: {
    paddingVertical: 20,
    borderRadius: 16,
    backgroundColor: '#C67C4E',
    marginBottom: 40,
    marginHorizontal: 40,
  },
  startButtonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
