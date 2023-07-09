/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Button from './components/button';

export const sum = (a, b) => a + b;

const App = () =>  {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <Text>Welcome</Text>
      <Button title="Login" onPress={() => {
        console.log('Login clicked');
      }}/>
    </SafeAreaView>
  );
}

export default App;