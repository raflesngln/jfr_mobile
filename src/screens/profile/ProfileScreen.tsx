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
import React, {useEffect, useState} from 'react';
import COLORS from '@/config/colors';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {logout} from '@/redux/apps/ProfileSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const ProfileScreen: React.FC = (props: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const [token, setToken] = useState<any>('');
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

  const getToken = async () => {
    const tokenLogin = await AsyncStorage.getItem('tokenLogin');
    setToken(tokenLogin);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={{marginTop: 0}}>
      <StatusBar
        translucent
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />

      <LinearGradient
        colors={['#139073', COLORS.primary, COLORS.primary]}
        style={{paddingTop: 35}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.5}}>
        <VStack h="15%" px={15} pt={10} space="2xl">
          {/* <Center>
            <Heading color="white">MY PROFILE</Heading>
          </Center> */}
          <HStack space="md">
            <Avatar size="xl">
              <AvatarFallbackText>SS</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
            </Avatar>
            <VStack>
              <Heading color="white" size="xl">
                {dataProfile.dataLogin.username}
              </Heading>
              <Text color={COLORS.textGray} size="sm">
                {dataProfile.dataLogin.email}
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </LinearGradient>

      <VStack h={'65%'} px={15} py={20} pb={100} justifyContent="space-between">
        <VStack>
          <TouchableOpacity>
            <HStack justifyContent="space-between">
              <Text>
                <MaterialCommunityIcons
                  name="account"
                  color={COLORS.textGray100}
                  size={25}
                />
                &nbsp; My Profile
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.textGray}
                  size={25}
                />
              </Text>
            </HStack>
            <Divider my="$3" />
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack justifyContent="space-between">
              <Text>
                <MaterialCommunityIcons
                  name="book-open"
                  color={COLORS.textGray100}
                  size={25}
                />
                &nbsp; My Tasks
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.textGray}
                  size={25}
                />
              </Text>
            </HStack>
            <Divider my="$3" />
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack justifyContent="space-between">
              <Text>
                <MaterialCommunityIcons
                  name="book-refresh"
                  color={COLORS.textGray100}
                  size={25}
                />
                &nbsp; Progress Tasks
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.textGray}
                  size={25}
                />
              </Text>
            </HStack>
            <Divider my="$3" />
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack justifyContent="space-between">
              <Text>
                <MaterialCommunityIcons
                  name="bookmark-check"
                  color={COLORS.textGray100}
                  size={25}
                />
                &nbsp; History Tasks
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.textGray}
                  size={25}
                />
              </Text>
            </HStack>
            <Divider my="$3" />
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack justifyContent="space-between">
              <Text>
                <MaterialCommunityIcons
                  name="email-outline"
                  color={COLORS.textGray100}
                  size={25}
                />
                &nbsp;Message
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.textGray}
                  size={25}
                />
              </Text>
            </HStack>
            <Divider my="$3" />
          </TouchableOpacity>
          <TouchableOpacity>
            <HStack justifyContent="space-between">
              <Text>
                <MaterialCommunityIcons
                  name="android-messages"
                  color={COLORS.textGray100}
                  size={25}
                />
                &nbsp;Chat
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.textGray}
                  size={25}
                />
              </Text>
            </HStack>
            <Divider my="$3" />
          </TouchableOpacity>
        </VStack>
        <VStack>
          <TouchableOpacity>
            <HStack justifyContent="space-between">
              <Text>
                <MaterialCommunityIcons
                  name="account-key"
                  color={COLORS.textGray100}
                  size={25}
                />
                &nbsp; Change Password
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.textGray}
                  size={25}
                />
              </Text>
            </HStack>
            <Divider my="$3" />
          </TouchableOpacity>
          <TouchableOpacity onPress={logOutUser}>
            <HStack justifyContent="space-between">
              <Text>
                <MaterialCommunityIcons
                  name="exit-to-app"
                  color={COLORS.textGray100}
                  size={25}
                />
                &nbsp; Log Out
              </Text>
              <Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  color={COLORS.textGray}
                  size={25}
                />
              </Text>
            </HStack>
            <Divider my="$3" />
          </TouchableOpacity>
        </VStack>
      </VStack>

      <Box h="20%">
        <Center>
          <Text>Version v.1.0.0</Text>
        </Center>
      </Box>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default ProfileScreen;
