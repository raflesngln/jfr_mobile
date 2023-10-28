import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TruckingNavigatorParamList} from './types';

import Jobslist from '@/screens/trucking/JobsList';
import DetailJobs from '@/screens/trucking/JobsDetail';
import InputTracking from '@/screens/trucking/InputTracking';
import StartLoading from '@/screens/trucking/InputLoading';
import DoneLoading from '@/screens/trucking/InputLoading';

const stack = createNativeStackNavigator<TruckingNavigatorParamList>(); // checking type for name stack & types params

const TruckingStackNavigator = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#ebedf0',
          zIndex: 1,
        },
      }}
      initialRouteName="ListJobs">
      <stack.Screen name="ListJobs" component={Jobslist} />
      <stack.Screen name="DetailJobs" component={DetailJobs} />
      <stack.Screen name="InputTracking" component={InputTracking} />
      <stack.Screen name="StartLoading" component={StartLoading} />
      <stack.Screen name="DoneLoading" component={DoneLoading} />
    </stack.Navigator>
  );
};

export default TruckingStackNavigator;
