import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Color from './src/assets/themes/Color';

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.text}>App</Text>
      <Text style={{color: Color.BlueDark}}>Blue text</Text>
      <View style={style.view}>
        <Text style={{color: Color.BlueLight}}>inside view</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    color: Color.RedDark,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  view: {
    backgroundColor: Color.GreenLight,
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
});
