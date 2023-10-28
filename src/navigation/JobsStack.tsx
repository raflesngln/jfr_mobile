import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {JobsNavigatorParamList} from './types';

import Jobslist from '@/screens/jobs/JobsList';
import DetailJobs from '@/screens/jobs/JobsDetail';
import InputJobs from '@/screens/jobs/InputJobs';
import cariJobs from '@/screens/jobs/cariJobs';

const stack = createNativeStackNavigator<JobsNavigatorParamList>(); // checking type for name stack & types params

const JobStackNavigator = () => {
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
      <stack.Screen name="InputJobs" component={InputJobs} />
      <stack.Screen name="cariJobs" component={cariJobs} />
    </stack.Navigator>
  );
};

export default JobStackNavigator;
