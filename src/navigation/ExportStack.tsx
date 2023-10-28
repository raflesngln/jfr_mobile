import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExportNavigatorParamList} from './types';

import ExportScreen from '@/screens/export/ExportScreen';
import CargoDeliveryOrder from '@/screens/export/CargoDeliveryOrder';
import DeliveryOrderPreparation from '@/screens/export/DeliveryOrderPreparation';
import ProofOfDelivery from '@/screens/export/ProofOfDelivery';
import History from '@/screens/export/History';
import Tracking from '@/screens/export/Tracking';

const stach = createNativeStackNavigator<ExportNavigatorParamList>(); // checking type for name stack & types params

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
      initialRouteName="ExportScreen">
      <stach.Screen name="ExportScreen" component={ExportScreen} />
      <stach.Screen name="CargoDeliveryOrder" component={CargoDeliveryOrder} />
      <stach.Screen
        name="DeliveryOrderPreparation"
        component={DeliveryOrderPreparation}
      />
      <stach.Screen name="ProofOfDelivery" component={ProofOfDelivery} />
      <stach.Screen name="History" component={History} />
      <stach.Screen name="Tracking" component={Tracking} />
    </stach.Navigator>
  );
};

export default JobStackNavigator;
