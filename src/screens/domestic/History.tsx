/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react';
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  useTheme,
  Divider,
} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import COLORS from '@/config/colors';

import {useAppSelector, useAppDispatch} from '@/redux/hooks';
import {setDataLogin, logout, changeDarkMode} from '@/redux/apps/ProfileSlice';

const JobsListScreen = () => {
  const theme = useColorScheme();
  const [appColorScheme, setAppColorScheme] = useState('light'); // Initialize with "light" or "dark" based on user preference
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigation = useNavigation<any>();
  const datalogin = useAppSelector(state => state.profile);
  const dispatch = useAppDispatch();
  const isDarkMode = useColorScheme();

  // Function to toggle color scheme
  const toggleColorScheme = () => {
    setAppColorScheme(appColorScheme === 'light' ? 'dark' : 'light');
  };

  if (loading) {
    return (
      <View>
        <Text>LOADING</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 12,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        color: 'black',
      }}>
      <Text style={{fontSize: 18, color: appColorScheme ? '#000' : '#000'}}>
        List Jobs Screen
      </Text>
      <View>
        <MaterialIcons name="notifications" color="#ffff" size={23} />
      </View>
      <View style={{flex: 1, paddingTop: 10}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            // Render your items here
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('JobsStack' as never, {
                  screen: 'DetailJobs',
                  params: {id: item.id, title: item.firstName},
                })
              }>
              <Box h="$9" justifyContent="center">
                <Text style={{color: 'black'}}>{item.firstName}</Text>
                <Divider my="$0.5" />
              </Box>
            </TouchableOpacity>
          )}
          style={{backgroundColor: 'white'}}
          keyExtractor={item => item.id}
        />
      </View>
      <Box>
        <Text>LOREM IPSUM {JSON.stringify(datalogin)}</Text>
        <Text>THEME IS {JSON.stringify(theme)}</Text>
        <Button
          onPress={() =>
            navigation.navigate('JobsStack' as never, {
              screen: 'InputJobs',
              params: {title: 'inpuyt jobs'},
            })
          }>
          <Text>Input New {isDarkMode ? 'dark' : 'light'}</Text>
        </Button>
        <Button onPress={toggleColorScheme}>
          <Text>CHANGE DARKMODE {appColorScheme}</Text>
        </Button>
        <Divider my="$0.5" />
      </Box>
    </View>
  );
};

export default JobsListScreen;
