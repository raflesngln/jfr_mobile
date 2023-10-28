import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {HomeStackNavigatorParamList} from './types';

import HomeScreen from '@/screens/home/HomeScreen';
import DetailsScreen from '@/screens/home/DetailsScreen';
import NotifScreen from '@/screens/home/NotifScreen';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#ebedf0',
          zIndex: 1,
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="NotifScreen" component={NotifScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;