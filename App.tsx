/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  focusManager,
  QueryClientProvider,
} from '@tanstack/react-query';
import {AppStateStatus, Platform} from 'react-native';

import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {useColorMode} from '@gluestack-style/react';
import {
  SafeAreaView,
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ToastProvider} from 'react-native-toast-notifications';

import RootNavigator from '@/navigation/Index';

// Create a client

import {useAppState} from '@/hooks/useAppState';
import {useOnlineManager} from '@/hooks/useOnlineManager';

// redux config
import {Provider} from 'react-redux';
import {persistor, store} from '@/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

function App(): JSX.Element {
  useOnlineManager();
  useAppState(onAppStateChange);

  const theme = useColorScheme();
  const isDarkMode = theme === 'light';
  // const isDarkMode = useColorScheme() === 'light';

  const colorMode = useColorMode();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <GluestackUIProvider config={config}>
              <ToastProvider>
                <RootNavigator />
                <StatusBar
                  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  backgroundColor={backgroundStyle.backgroundColor}
                />
              </ToastProvider>
            </GluestackUIProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
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
