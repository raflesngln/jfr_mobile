/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import COLORS from '@/config/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import {BottomTabNavigatorParamList} from './types';
import HomeScreen from '@/screens/home/HomeScreen';
import TruckingStack from '@/navigation/TruckingStack';
import ExportStack from '@/navigation/ExportStack';
import DomesticStack from '@/navigation/DomesticStack';
import ProfileScreen from '@/screens/profile/ProfileScreen';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, HStack, Heading, Text, View} from '@gluestack-ui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const CustomBottomMenu = ({children, onPress}: any) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 100,
        paddingBottom: 9,
        backgroundColor: 'trasparent',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabs = () => {
  const counting: number = 4;

  return (
    <SafeAreaProvider style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator
        screenOptions={({route}: any) => ({
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: '#7d7d7d',
          headerShown: false,
          gestureEnabled: true,
          unmountOnBlur: true,
          tabBarStyle: {
            height: 65,
            width: '100%',
            // marginLeft:'3%',
            paddingHorizontal: 5,
            paddingTop: 5,
            paddingBottom: 5,
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            position: 'absolute',
            // backgroundColor: '#0e4ca1',
            backgroundColor: '#fff',
          },
          pressColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 12,
            padding: 2,
          },
        })}>
        <Tab.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="view-dashboard-outline"
                color={color}
                size={size + 2}
              />
            ),
          }}
        />
        <Tab.Screen
          name="DomesticNavigation"
          component={DomesticStack}
          options={{
            tabBarLabel: 'Domestic',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="airplane-landing"
                color={color}
                size={size + 2}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={TruckingStack}
          options={{
            tabBarLabel: 'Trucking',
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                  position: 'absolute',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 65,
                  height: 68,
                  bottom: 0,
                  // backgroundColor: '#175fc2',
                  backgroundColor: 'white',
                  borderColor: color,
                  borderWidth: 4,
                  overflow: 'hidden',
                  borderRadius: 100,
                  zIndex: 999,
                  shadowColor: 'red',
                  shadowOffset: {width: 10, height: 18},
                  shadowOpacity: 0.6,
                  shadowRadius: 3,
                }}>
                <Text>
                  <MaterialCommunityIcons
                    name="truck"
                    color={color}
                    size={28}
                  />
                </Text>
                {/* <Image
                source={require('@/assets/images/scan.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                  alignContent: 'center',
                  shadowColor: '#13bdbd',
                  shadowOffset: {width: 12, height: 24},
                  shadowOpacity: 2,
                  shadowRadius: 5,
                }}
              /> */}
              </View>
            ),
            tabBarButton: (props: any) => <CustomBottomMenu {...props} />,
          }}
        />

        <Tab.Screen
          name="ExportNavigation"
          component={ExportStack}
          options={{
            tabBarLabel: 'Export',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="airplane-takeoff"
                color={color}
                size={size + 2}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Import',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size + 2}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#767285',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default BottomTabs;
