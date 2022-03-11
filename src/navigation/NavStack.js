import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Option1 from '../screens/Option1';
import Screen2 from '../screens/Screen2';

const Stack = createNativeStackNavigator();
const NavStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Screen1" component={Option1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};
export default NavStack;
