import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Option3 from './screens/Option3';
import Option1 from './screens/Option1';
import Option2 from './screens/Option2';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen2 from './screens/Screen2';

const Stack = createNativeStackNavigator();
const Home = props => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Screen1" component={Option1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function App() {
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
        <Tab.Screen name="Option1" component={Home} />
        <Tab.Screen name="Option2" component={Option2} />
        <Tab.Screen name="Option3" component={Option3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
