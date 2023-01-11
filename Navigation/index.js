import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

// /**
//  * Splash Component
//  */
import Splash from '../screens/Splash';
/**
 * Authorization Component
 */
import Login from '../screens/Login';

// /**
//  * Dashboard Component
//  */
// import Landing from "../screens/LandingPage";

const Stack = createStackNavigator();
const StackNavigationSplash = () => {
  return (
    <Stack.Navigator
      // headerMode="""
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};
const StackNavigationAuth = () => {
  return (
    <Stack.Navigator
      // headerMode="""
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  const state = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {/* <StackNavigationSplash /> */}
      <StackNavigationAuth />
    </NavigationContainer>
  );
}
