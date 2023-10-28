/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Box, Center, Text, VStack} from '@gluestack-ui/themed';
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

import {MotiView} from 'moti';
import COLORS from '@/config/colors';
import LinearGradient from 'react-native-linear-gradient';

// import Teamwork from '@assets/images/teamwork.svg';
import Deliveri from '@/components/svg/delivery';
import {useNavigation} from '@react-navigation/native';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
import LoadingSpinner from '@/components/LoadingSpinner';

const StartupScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [isToggled, setIsToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({username: '', password: ''});

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setIsToggled(true);
    }, 100);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LoadingSpinner visible={isLoading} />
      <StatusBar
        translucent
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <LinearGradient
        colors={['#fff', '#fff', '#fff']}
        style={styles.container}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0.5}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}>
          <Box style={{width: '100%', height: '30%'}}>
            <Center px={5}>
              <VStack>
                <Center>
                  <Image
                    source={require('@/assets/images/jfr.png')}
                    style={{
                      width: 90,
                      height: 90,
                      resizeMode: 'contain',
                      marginTop: '20%',
                    }}
                  />
                </Center>
                <Center ml={10}>
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
                    <Text style={styles.title}>JFR Mobile</Text>
                  </MotiView>
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
                      delay: 600,
                    }}>
                    <Text
                      style={
                        (styles.sectionDescription,
                        {color: COLORS.textGray100, fontSize: 18})
                      }>
                      Operation Application of JFR
                    </Text>
                  </MotiView>
                </Center>
              </VStack>
            </Center>
          </Box>
          <Box w="$80" style={{width: '100%', height: '40%'}}>
            <MotiView
              from={{
                opacity: 0,
                scale: 0.2,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: 'timing',
                delay: 0,
              }}>
              <Center>
                <Deliveri w={deviceWidth / 1} h={deviceHeight / 3} />
              </Center>
            </MotiView>
          </Box>

          <VStack
            w="$10"
            py={25}
            px={15}
            bg={COLORS.primary}
            borderTopLeftRadius={20}
            borderTopRightRadius={20}
            justifyContent="space-between"
            style={{width: '100%', height: '30%'}}>
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
                delay: 600,
              }}>
              <Text
                px={5}
                style={
                  (styles.sectionDescription,
                  {color: 'white', fontSize: 18, lineHeight: 30})
                }>
               JFR Mobile adalah aplikasi mboile untuk melkaukan aktivitas
                tracking jobs barang kiriman Tracking Jobs dengan mudah dengan
                mobile apps
              </Text>
            </MotiView>
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
                delay: 1100,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('AuthStack' as never, {
                    screen: 'LoginUser',
                    params: {title: 'Login User'},
                  })
                }>
                <Box h={45} borderRadius={15} bg={COLORS.primaryDark}>
                  <Center pt={10}>
                    <Text style={{color: 'white', fontSize: 18}}>
                      Get Started
                    </Text>
                  </Center>
                </Box>
              </TouchableOpacity>
            </MotiView>
          </VStack>
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

  title: {
    fontSize: 40,
    fontWeight: '600',
    color: COLORS.primary,
    paddingTop: 25,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 25,
    fontWeight: '400',
  },
});
export default StartupScreen;
