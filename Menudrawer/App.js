import React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';

enableScreens();
const App = () => {
  return (
    <MealsNavigator />
  )
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: "Amatic-Bold"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: "Amatic-Bold"
  },
  highlight: {
    fontWeight: '700',
    fontFamily: "Amatic-Bold"
  },
});

export default App;
