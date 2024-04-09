import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {GetStartButton} from '../components/GetStartButton';

const Onboard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../asset/BG.png')} style={styles.image}>
        <GetStartButton />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Onboard;
