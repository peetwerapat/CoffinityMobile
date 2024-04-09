import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboard from './src/screens/Onboard';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboard"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboard" component={Onboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
  },
});

export default App;
