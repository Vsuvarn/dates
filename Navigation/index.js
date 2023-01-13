import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import {useSelector, useDispatch} from 'react-redux';
import {SPLASHactions} from '../Redux/Reducer/authReducer';
/**
 * Splash Component
 */
import Splash from '../screens/Splash';
/**
 * Authorization Component
 */
import Login from '../screens/Login';

/**
 * Landing Component
 */
import Landing from '../screens/LandingPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Tab.Screen
        name="Feed"
        component={Landing}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                height: '90%',
                aspectRatio: 1,
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/ic_news_feed_active.png')}
                style={{height: '90%', aspectRatio: 1}}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={() => <Text variant="displaySmall">News</Text>}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                height: '90%',
                aspectRatio: 1,
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/ic_event_normal.png')}
                style={{height: '90%', aspectRatio: 1}}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dogs"
        component={() => <Text variant="displaySmall">Dogs</Text>}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                height: '90%',
                aspectRatio: 1,
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/ic_dogg_normal.png')}
                style={{height: '90%', aspectRatio: 1}}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={() => <Text variant="displaySmall">Chats</Text>}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                height: '90%',
                aspectRatio: 1,
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/ic_chat_normal.png')}
                style={{height: '90%', aspectRatio: 1}}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={() => <Text variant="displaySmall">User</Text>}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <View
              style={{
                height: '90%',
                aspectRatio: 1,
                borderWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/ic_boy_profile_normal.png')}
                style={{height: '90%', aspectRatio: 1}}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
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
  useEffect(() => {
    setTimeout(() => {
      dispatch(SPLASHactions());
    }, 4000);
  }, []);
  return (
    <NavigationContainer>
      {state.usersInfo.splash ? (
        <StackNavigationSplash />
      ) : state.usersInfo.loginIs ? (
        <TabNavigation />
      ) : (
        <StackNavigationAuth />
      )}

      {/* <StackNavigationAuth /> */}
      {/* <TabNavigation /> */}
    </NavigationContainer>
  );
}
