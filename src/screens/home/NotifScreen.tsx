/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const NotifScreen = (props: any) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={{color:'red'}}>NotifScreen Page</Text>
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
export default NotifScreen;


