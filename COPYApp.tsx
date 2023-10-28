/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {AppBar, IconButton, FAB} from '@react-native-material/core';
import {
  Flex,
  HStack,
  Box,
  Button,
  Stack,
  ActivityIndicator,
  Switch,
} from '@react-native-material/core';
import {config, GluestackUIProvider, Text} from '@gluestack-ui/themed';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'light';
  const [loading, setLoading] = useState(true);

  const actionSave = (arg0: string) => {
    console.log('adsadad');
  };

  return (
    <GluestackUIProvider config={config.theme}>
      <Flex
        fill={true}
        direction="column"
        justify="between"
        style={{backgroundColor: '#ffff'}}>
        <View>
          <HStack m={4} spacing={6}>
            <View style={{width: 40, height: 40, backgroundColor: '#faf089'}} />
            <View style={{width: 40, height: 40, backgroundColor: '#ff6347'}} />
            <View style={{width: 40, height: 40, backgroundColor: '#fed7e2'}} />
          </HStack>
        </View>
        <View>
          <Text>skdksjdksd</Text>
        </View>
        <View>
          <HStack m={4} spacing={6}>
            <View style={{width: 40, height: 40, backgroundColor: '#faf089'}} />
            <View style={{width: 40, height: 40, backgroundColor: '#ff6347'}} />
            <View style={{width: 40, height: 40, backgroundColor: '#fed7e2'}} />
          </HStack>
        </View>
      </Flex>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
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

export default App;
