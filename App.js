/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
 import { HomeScreen }  from './screens/index';

const App = () => {
  return (
    <>
      <HomeScreen/>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
