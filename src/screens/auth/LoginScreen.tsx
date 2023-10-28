/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  AlertCircleIcon,
  Box,
  Center,
  HStack,
  Heading,
  VStack,
  Text,
} from '@gluestack-ui/themed';
import {
  Dimensions,
  View,
  TextInput,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useToast} from 'react-native-toast-notifications';
import {setDataLogin, logout, changeDarkMode} from '@/redux/apps/ProfileSlice';
import {useAppSelector, useAppDispatch} from '@/redux/hooks';
import {MotiView} from 'moti';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '@/config/colors';

import LoadingSpinner from '@/components/LoadingSpinner';
import {getLogin} from '@/services/auth/userAuth';

// import Teamwork from '@assets/images/teamwork.svg';
import Deliveri from '@/components/svg/delivery';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const LoginScreen: React.FC = () => {
  const toast = useToast();
  const navigation = useNavigation<any>();
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<any>();
  const [input, setInput] = useState({username: '', password: ''});
  const dataProfile = useAppSelector(state => state.profile);

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({defaultValues: {username: '', password: ''}});

  const GotoHome = () => {
    navigation.navigate('BottomMenu' as never);
  };
  const showToast = (msg: any) => {
    toast.show(`${msg}`, {
      type: 'danger',
      placement: 'bottom',
      duration: 8000,
      animationType: 'zoom-in',
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsToggled(true);
    }, 100);
  }, [input]);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    // console.log('Data Login adalah : ', data.username);
    const {username, password} = data;

    setInput({username: username, password: password});
    const checkDataLogin = await getLogin({
      email: username,
      password: password,
    });

    if (checkDataLogin.token) {
      const dataPatch = {
        isLogin: true,
        firstOpenApp: false,
        idUser: checkDataLogin.user.driver_no,
        username: checkDataLogin.user.driver_name,
        email: checkDataLogin.user.email,
        profilePicture: 'raflesngln.png',
        phone: checkDataLogin.user.driver_contact_number1,
        token: checkDataLogin.token,
      };
      console.log(checkDataLogin);
      AsyncStorage.setItem('tokenLogin', checkDataLogin.token);
      // showToast('Berhasil');
      dispatch(setDataLogin(dataPatch));
      setTimeout(() => {
        setIsLoading(false);
        toast.hideAll();
        GotoHome();
      }, 800);
    } else {
      showToast('Username And Password tidak sesuai');
      AsyncStorage.setItem('tokenLogin', '');
      setTimeout(() => {
        setIsLoading(false);
        toast.hideAll();
      }, 2000);
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoadingSpinner visible={isLoading} />
      <StatusBar
        translucent
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <LinearGradient
        colors={[COLORS.primary, '#2EA88C', COLORS.primary]}
        // colors={['#288471', '#2CA58D', '#288471']}
        style={styles.container}
        start={{x: 0, y: 0.1}}
        end={{x: 1, y: 1}}>
        <View
          style={{flex: 1, justifyContent: 'space-between', paddingTop: 25}}>
          <Center h="25%">
            <VStack>
              <Center>
                <Image
                  source={require('@/assets/images/jfr.png')}
                  style={{
                    width: 55,
                    height: 55,
                    resizeMode: 'contain',
                    marginTop: '10%',
                    marginLeft: '-2%',
                  }}
                />
              </Center>
              <Center pt={5} mt={5} ml={10}>
                <MotiView
                  from={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    type: 'timing',
                    delay: 300,
                  }}>
                  <Text style={[styles.title, {color: COLORS.white}]}>
                    LOGIN USER
                  </Text>
                </MotiView>
              </Center>
            </VStack>
          </Center>

          <Center h="60%">
            <Box h="90%" w="90%" px={15} py={25} borderRadius={10}>
              <VStack justifyContent="space-between">
                <Center>
                  {errors.username && <Text>username is required.</Text>}
                </Center>

                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      placeholder="Username"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      style={styles.input}
                    />
                  )}
                  name="username"
                />

                <Controller
                  control={control}
                  rules={{
                    maxLength: 100,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      placeholder="Password"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      style={styles.input}
                    />
                  )}
                  name="password"
                />

                <Text>{JSON.stringify(token)}</Text>
                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                  <Box
                    mt={10}
                    borderRadius={30}
                    w="100%"
                    h={50}
                    bg={COLORS.primaryDark}
                    style={styles.shadowButton}>
                    <Center pt={15}>
                      <Text color="#EBF1F2" fontSize={20} fontWeight="600">
                        LOGIN
                      </Text>
                    </Center>
                  </Box>
                </TouchableOpacity>
              </VStack>
            </Box>
          </Center>
          <HStack px={20} h="20%" justifyContent="space-between">
            <Box>
              <Text style={[styles.sectionTitle, {color: COLORS.white}]}>
                Register User
              </Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.sectionTitle,
                    {
                      textDecorationColor: 'red',
                      textDecorationLine: 'underline',
                      color: COLORS.textSecondary,
                    },
                  ]}>
                  Click Here
                </Text>
              </TouchableOpacity>
            </Box>
            <Box>
              <Text style={[styles.sectionTitle, {color: COLORS.white}]}>
                Forgot Password?
              </Text>
              <TouchableOpacity onPress={showToast}>
                <Text
                  style={[
                    styles.sectionTitle,
                    {
                      textDecorationColor: 'red',
                      textDecorationLine: 'underline',
                      color: COLORS.textSecondary,
                    },
                  ]}>
                  Click Here
                </Text>
              </TouchableOpacity>
            </Box>
          </HStack>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    paddingTop: 9,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  input: {
    fontSize: 16,
    fontWeight: '500',
    color: '#288471',
    backgroundColor: '#EBF1F2',
    marginBottom: 15,
    borderRadius: 20,
    padding: 8,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 25,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  shadowButton: {
    shadowColor: COLORS.primaryDark,
    shadowOffset: {width: 5, height: 14},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    marginVertical: 10,
    elevation: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },
});
export default LoginScreen;
