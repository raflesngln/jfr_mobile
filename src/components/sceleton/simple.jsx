import React from 'react';
import ContentLoader, {Rect, Circle, Path} from 'react-content-loader/native';
import {Text} from 'react-native';

export default function Placeholder() {
  return (
    <ContentLoader viewBox="0 0 380 70">
      <Circle cx="30" cy="30" r="30" />
      <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
      <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
    </ContentLoader>
  );
}
