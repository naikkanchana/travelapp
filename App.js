/* eslint-disable prettier/prettier */
import React from 'react';
import Home from './src/screens/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen component={Home} name ='Home' ></Stack.Screen>
          <Stack.Screen component={AttractionDetails} name ='AttractionDetails' ></Stack.Screen>
          <Stack.Screen component={Gallery} name ='Gallery' ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
