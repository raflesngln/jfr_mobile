import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileNavigatorParamList} from './types';

import ProfileScreen from '@/screens/profile/ProfileScreen';
import ChangePassword from '@/screens/profile/ChangePassword';

const stach = createNativeStackNavigator<ProfileNavigatorParamList>(); // checking type for name stack & types params

const JobStackNavigator = () => {
  return (
    <stach.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#ebedf0',
          zIndex: 1,
        },
      }}
      initialRouteName="Profile">
      <stach.Screen name="Profile" component={ProfileScreen} />
      <stach.Screen name="ChangePassword" component={ChangePassword} />
    </stach.Navigator>
  );
};

export default JobStackNavigator;
