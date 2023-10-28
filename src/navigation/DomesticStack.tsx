import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DomesticNavigatorParamList} from './types';

import DomesticScreen from '@/screens/domestic/DomesticScreen';
import DomesticDetail from '@/screens/domestic/DomesticDetail';
import CargoDeliveryOrder from '@/screens/export/CargoDeliveryOrder';
import DeliveryOrderPreparation from '@/screens/export/DeliveryOrderPreparation';
import ProofOfDelivery from '@/screens/export/ProofOfDelivery';
import History from '@/screens/export/History';
import Tracking from '@/screens/export/Tracking';

const stach = createNativeStackNavigator<DomesticNavigatorParamList>(); // checking type for name stack & types params

const DomesticNavigator = () => {
  return (
    <stach.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#ebedf0',
          zIndex: 1,
        },
      }}
      initialRouteName="DomesticScreen">
      <stach.Screen name="DomesticScreen" component={DomesticScreen} />
      <stach.Screen name="DomesticDetail" component={DomesticDetail} />
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

export default DomesticNavigator;
