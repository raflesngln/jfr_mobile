/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Text,
  AvatarFallbackText,
  AvatarImage,
  Button,
  HStack,
  Heading,
  VStack,
  Center,
  Box,
  Divider,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import COLORS from '@/config/colors';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import {logout} from '@/redux/apps/ProfileSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const DATA_CARD = [
  {id: 1, short: 'OFFICE', title: 'Assign Driver Office', icon: 'truck-plane'},
  {
    id: 2,
    short: 'UPI',
    title: 'Assign Driver',
    icon: 'cart-flatbed-suitcase',
  },
  {id: 3, short: 'QUARANTINE', title: 'Assign Driver ', icon: 'cart-flatbed'},
  {id: 4, short: '', title: 'Driver Task Assign', icon: 'clock-rotate-left'},
  {id: 5, short: '', title: 'Paack Check UPI', icon: 'map-location-dot'},
  {id: 5, short: '', title: 'Pack Check Quarantine', icon: 'map-location-dot'},
  {id: 5, short: '', title: 'Wire House', icon: 'map-location-dot'},
];
const ExportScreen: React.FC = (props: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const dataProfile = useAppSelector(state => state.profile);

  const logOutUser = () => {
    setIsLoading(true);

    dispatch(logout());
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('AuthStack' as never, {
        screen: 'LoginUser',
        params: {title: 'LoginUser'},
      });
    }, 800);
  };

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />



      <VStack h={'70%'} px={15} py={25} justifyContent="flex-start">
        <HStack gap={10} style={{flexWrap: 'wrap'}}>
          {DATA_CARD.map((val, i) => {
            return (
              <TouchableOpacity key={i}>
                <VStack style={styles.card} justifyContent="space-between">
                  <Center>
                    <FontAwesome6
                      name={val.icon}
                      color={COLORS.textGray100}
                      size={40}
                    />
                  </Center>
                  <Center>
                    <Text>{val.short}</Text>
                  </Center>
                  <Center>
                    <Text size="sm">{val.title}</Text>
                  </Center>
                </VStack>
              </TouchableOpacity>
            );
          })}
        </HStack>

        {/* <VStack mt={30}>
          <Heading mb={12}>Last Status Master</Heading>
          {DATA_CARD.map((val, i) => {
            return (
              <TouchableOpacity key={i}>
                <HStack justifyContent="space-between">
                  <Text>
                    <MaterialCommunityIcons
                      name="chevron-right"
                      color={'grey'}
                      size={25}
                    />
                    &nbsp; Master : 12237264327647
                  </Text>
                </HStack>
                <Divider my="$3" />
              </TouchableOpacity>
            );
          })}
        </VStack> */}
      </VStack>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  card: {
    fontWeight: '400',
    height: 120,
    paddingTop: 15,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    width: deviceWidth / 3.5,
    paddingHorizontal: 2,
    paddingVertical: 6,
    marginBottom: 10,
  },
});
export default ExportScreen;
