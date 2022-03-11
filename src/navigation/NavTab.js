import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Option2 from '../screens/Option2';
import Option3 from '../screens/Option3';
import navStack from './NavStack';
const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Option1') {
              iconName = focused ? 'ios-information-circle' : 'ios-list';
            } else if (route.name === 'Option2') {
              iconName = focused ? 'ios-information-circle' : 'ios-list';
            } else if (route.name === 'Option3') {
              iconName = focused ? 'ios-information-circle' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'white',
          headerShown: false,
        })}>
        <Tab.Screen name="Option1" component={navStack} />
        <Tab.Screen name="Option2" component={Option2} />
        <Tab.Screen name="Option3" component={Option3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavTab;
