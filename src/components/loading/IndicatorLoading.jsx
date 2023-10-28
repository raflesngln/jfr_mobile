import {View} from 'moti';
import React, {Component} from 'react';
import COLORS from '@/config/colors';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default function IndicatorLoading() {
  return (
    <View style={{flex: 1, height: '100%'}}>
      <SkypeIndicator color={COLORS.third} size={70} count={6} minScale={0.1} />
    </View>
  );
}
