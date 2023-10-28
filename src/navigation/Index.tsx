/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {useColorScheme} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootNavigatorList} from './types';

import BottomTabsMenu from '@/navigation/Tabs';
import SplashScreen from '@/screens/intro/SplashScreen';
import StartUpScreen from '@/screens/intro/StartUpScreen';
import AuthStack from '@/navigation/AuthStack';
// import BottomTabsStack from './Tabs';
import HomeStack from '@/navigation/HomeStack';
import JobsStack from '@/navigation/JobsStack';
import TruckingStack from '@/navigation/TruckingStack';
import DomesticStack from '@/navigation/DomesticStack';
import ProfileStack from '@/navigation/ProfileStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from '@gluestack-ui/themed';
import COLORS from '@/config/colors';

const Stack = createNativeStackNavigator<RootNavigatorList>(); // checking type for name stack & types params
const RootNavigator = () => {
  const theme = useColorScheme();
  // Use the useColorScheme hook to get the system color scheme
  const systemColorScheme = useColorScheme();
  // Set the default color scheme to "light" if the system is in "light" mode
  const defaultColorScheme = systemColorScheme === 'light' ? 'light' : 'dark';

  return (
    <SafeAreaProvider style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer
        theme={defaultColorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="StartUpScreen" component={StartUpScreen} />
          <Stack.Screen name="BottomMenu" component={BottomTabsMenu} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
          <Stack.Screen name="JobsStack" component={JobsStack} />
          <Stack.Screen name="TruckingStack" component={TruckingStack} />
          <Stack.Screen name="DomesticStack" component={DomesticStack} />
          <Stack.Screen name="ProfileStack" component={ProfileStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigator;
