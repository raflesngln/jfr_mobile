/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Divider} from '@gluestack-ui/themed';

import useFetchingDetail from '@/services/users/useDataDetails';

// Define the expected properties for your component
type DetailScreenProps = {
  // Add props if your component accepts any
};

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id, age} = route.params;

  const {data, loading, error} = useFetchingDetail({
    url: `https://dummyjson.com/users/${id}`,
  }); // Use the custom hook

  useEffect(() => {
    // console.log("THIS IS DATA: ",JSON.stringify(data))
    if (data) {
      console.log('THIS IS DATA:', JSON.stringify(data));
    }
  }, [data]);

  if (loading) {
    return (
      <View>
        <Text style={{color: 'black'}}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text style={{color: 'black'}}>{error}</Text>
      </View>
    );
  }

  if (data) {
    // Render the fetched data here
    return (
      <View>
        <Text style={{color: 'black'}}>Success</Text>
        <Text style={{color: 'black'}}>ID: {id}</Text>
        <Text style={{color: 'black'}}>AGE: {age}</Text>
        <Text style={{color: 'black'}}>NAME: {data?.firstName}</Text>
        {/* Render additional data from 'data' if needed */}
        <Divider my="$0.5" />

        <TouchableOpacity onPress={() => navigation.navigate('NotifScreen')}>
          <Text style={{color: 'red'}}>GOTO NOTIF</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Default rendering if none of the conditions above are met
  return (
    <View>
      <Text style={{color: 'black'}}>No data available.</Text>
    </View>
  );
};

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

export default DetailScreen;
