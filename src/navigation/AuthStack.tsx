import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigatorParamList} from './types';

import LoginScreen from '@/screens/auth/LoginScreen';
import RegisterScreen from '@/screens/auth/RegisterScreen';
import ForgotPasswordScreen from '@/screens/auth/ForgotPassword';

const Stack = createNativeStackNavigator<AuthNavigatorParamList>(); // checking type for name stack & types params

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#ebedf0',
          zIndex: 999,
        },
      }}
      initialRouteName="LoginUser">
      <Stack.Screen name="LoginUser" component={LoginScreen} />
      <Stack.Screen name="RegisterUser" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
