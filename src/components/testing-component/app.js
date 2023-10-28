// App.js
import React from 'react';
import {View, Text, TextInput} from 'react-native';

const App = () => (
  <View>
    <Text>Hello, React Native!</Text>
    <Text>Testing with Jest and Enzyme in React Native</Text>
    <View>
      <TextInput name="name" placeholder="type name" />
    </View>
  </View>
);

export default App;
