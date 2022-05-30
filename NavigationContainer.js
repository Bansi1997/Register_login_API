// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const ChildStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const InitialStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="childstack"
        component={ChildStack}
        //options={{headerShown: false}}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        //options={{headerShown: false}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        //options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InitialStack"
          component={InitialStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainFlow"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
