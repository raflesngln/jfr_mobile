/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useEffect, useState} from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {
  Dimensions,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {setDataLogin, logout, changeDarkMode} from '@/redux/apps/ProfileSlice';
import {useAppSelector, useAppDispatch} from '@/redux/hooks';
import {MotiView, Image as MotiImage} from 'moti';
import COLORS from '@/config/colors';
import LinearGradient from 'react-native-linear-gradient';

// import Teamwork from '@assets/images/teamwork.svg';
import Motorcycle from '@/components/svg/motorcycle';
import {useNavigation} from '@react-navigation/native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
import LoadingSpinner from '@/components/LoadingSpinner';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StartupScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dataProfile = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setIsToggled(true);
    }, 100);
  }, []);

  const onSubmit = (data: any) => {
    console.log('Data Login adalah : ', data);
    const dataPatch = {
      isLogin: true,
      username: data.username,
      profilePicture: 'raflesngln.png',
      value: 9990,
      darkMode: 'light',
    };
    dispatch(setDataLogin(dataPatch));
  };

  function checkLoginState() {
    const {isLogin, firstOpenApp} = dataProfile.dataLogin;
    if (firstOpenApp) {
      setTimeout(() => {
        navigation.navigate('StartUpScreen');
      }, 2000);
    } else {
      if (isLogin) {
        // console.log('LOGIN STATE ACTIVE');
        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate('BottomMenu');
        }, 2000);
      } else {
        // console.log('NO STATE LOGIN');
        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate('AuthStack' as never, {
            screen: 'LoginUser',
            params: {title: 'LoginUser'},
          });
        }, 2000);
      }
    }
  }

  useEffect(() => {
    checkLoginState();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <LoadingSpinner visible={isLoading} /> */}
      <StatusBar
        translucent
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <VStack mt={0} h="100%">
        <Box pl={10} h="25%" bg={COLORS.primary}>
          <LinearGradient
            colors={[COLORS.primary, COLORS.primary, COLORS.primary]}
            style={styles.container}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0.5}}>
            <HStack justifyContent="space-between">
              <Box>
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
              </Box>
              <HStack gap={10} pr={15}>
                <TouchableOpacity>
                  <Text>
                    <MaterialCommunityIcons
                      name="bell"
                      color={COLORS.white}
                      size={26}
                    />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>
                    <MaterialCommunityIcons
                      name="email"
                      color={COLORS.white}
                      size={26}
                    />
                  </Text>
                </TouchableOpacity>
              </HStack>
            </HStack>
          </LinearGradient>
        </Box>
        <Box
          h="75%"
          bg={COLORS.bgGrey100}
          borderTopRightRadius={40}
          borderTopLeftRadius={40}
          pt={15}
          pl={15}
          mt={-30}>
          <HStack gap={5} mb={15}>
            {[1, 5, 5].map((val, i) => {
              return (
                <HStack key={i} bg={'#72CC50'} w="25%" h={75} borderRadius={9}>
                  <Text>Terlaris</Text>
                  <Box>
                    <Text>Terlaris</Text>
                    <Text>140</Text>
                  </Box>
                </HStack>
              );
            })}
          </HStack>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facilis nostrum fugiat nemo dolor error, culpa quidem laborum
            mollitia inventore officia debitis deleniti a veniam repellendus
            ipsam corporis facere laboriosam!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facilis nostrum fugiat nemo dolor error, culpa quidem laborum
            mollitia inventore officia debitis deleniti a veniam repellendus
            ipsam corporis facere laboriosam!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facilis nostrum fugiat nemo dolor error, culpa quidem laborum
            mollitia inventore officia debitis deleniti a veniam repellendus
            ipsam corporis facere laboriosam!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facilis nostrum fugiat nemo dolor error, culpa quidem laborum
            mollitia inventore officia debitis deleniti a veniam repellendus
            ipsam corporis facere laboriosam!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facilis nostrum fugiat nemo dolor error, culpa quidem laborum
            mollitia inventore officia debitis deleniti a veniam repellendus
            ipsam corporis facere laboriosam!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facilis nostrum fugiat nemo dolor error, culpa quidem laborum
            mollitia inventore officia debitis deleniti a veniam repellendus
            ipsam corporis facere laboriosam!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            facilis nostrum fugiat nemo dolor error, culpa quidem laborum
            mollitia inventore officia debitis deleniti a veniam repellendus
            ipsam corporis facere laboriosam!
          </Text>
        </Box>
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: COLORS.primary,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '600',
    color: '#2CA58D',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 25,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default StartupScreen;
