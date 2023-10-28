/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Box, Center, Heading, Text} from '@gluestack-ui/themed';
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
      <LinearGradient
        // colors={[COLORS.primary, COLORS.primary, COLORS.primary]}
        colors={[COLORS.primary, COLORS.white, COLORS.primary]}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.5}}>

        <MotiImage
          style={{
            width: 300,
            height: 200,
          }}
          from={{
            marginLeft: -200,
            opacity: 1,
          }}
          animate={{
            opacity: 0.5,
            marginLeft: 1000,
          }}
          transition={{
            loop: true,
            repeatReverse: false,
            type: 'timing',
            duration: 3000,
          }}
          source={require('@/assets/images/delivery2.png')}
        />
      </LinearGradient>
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
