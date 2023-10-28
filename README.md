# Transys Mobile Application
- git clone project
- yarn install
- 📄 Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
  ```
   apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
   ```
- react-native-asset
- ``` cd android && gradlew clean OR  cd android && chmod +x gradlew ```
- cd ..
- ``` react-native-asset ```
- ``` yarn start --reset-cache ```
- ``` npm run android ```



## Tips & trik tools settings

create apps:
npx react-native init AwesomeTSProject
OR
npx react-native init AwesomeTSProject --template react-native-template-typescript

Check Error Code ESlint =>    yarn tsc
checking Modules code is warning error=> tsc --traceResolution

 react-native run-android --deviceId=3201f6c7ec0a161f

## Clean project
- 📁 cd android && gradlew clean ||  cd android && chmod +x gradlew
- yarn start --reset-cache

```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="aaa"
    xmlns:tools="http://schemas.android.com/tools">
```
-gradle build --warning-mode=all



- instal react-navigation=> https://reactnavigation.org/docs/getting-started

## React native icon and assets and font in react native with 
- instal react-native-vector-icons
  ``` yarn add react-native-vector-icons ```
- 📁 Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
   ```
  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle" 
  ```
- run cmd in project : react-native-asset
- cd android && gradlew clean
- and run again : react-native-asset and run gradele clean again


## Setup Path Alias/dynamic module folder in a React Native
 Documentasi: https://reactnative.dev/docs/typescript#adding-typescript-to-an-existing-project

- Install module resolver => yarn add --dev babel-plugin-module-resolver
- 📄 ganti nama index.js menjadi index.tsx
- 📄 buat file tsconfig.json
 // tsconfig.json
 ```
{
  "extends": "@tsconfig/react-native/tsconfig.json" /* Recommended React Native TSConfig base */,
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ],
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Completeness */
    "skipLibCheck": true,
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    // Path alias config
    "baseUrl": ".",
    "paths": {
      "*": ["src/*"],
      "tests": ["__tests__/*"],
      "@components/*": ["src/components/*"],
      "@redux/*": ["src/redux/*"]
    }
  }
}
```
- 📄 Buat file babel.config.js

```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
```
- 📄 Buat file jest.config.js
```
	module.exports = {
  		preset: 'react-native',
  		moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	};
   ```
-  run command to reset chached => yarn start --reset-cache
- DONE !

## React Native Firebase 
-Instal Pcakage:
```
    yarn add @react-native-firebase/app
    yarn add @react-native-firebase/auth
    yarn add @react-native-firebase/messaging
```
- Create Project in google console => https://console.firebase.google.com and download file google-services.json
-place google-services.json to folder path android\app 
- 📄 edit file android/build.gradle and add 
    ```
    dependencies {
        classpath 'com.google.gms:google-services:4.3.13'
    }
    ```
- 📄 edit file android/app/build.gradle and add code: 
  ```
  apply plugin: "com.google.gms.google-services"
	dependencies {
    		implementation platform('com.google.firebase:firebase-bom:31.1.1')
	}
  ```
- Clean project 
  ``` cd android && gradlew clean ```
- Reset Project
  ``` yarn start --reset-cache ```

  - ON IOS
```
  cd ios && pod install && cd ..
```
- DONE !


## Darkmode is Disable for setting in gradle
for custom or enable or disabled darkmode, go to File path: android/app/src/main/res/values/styles.xml
```
change

<style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">

to

<style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">

<style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
    <!-- Customize your theme here. -->
    <item name="android:textColor">#000000</item>
</style>

```




## Create File Debug Running On other devices 
- run command => 
  ```
  npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
  ```
- then run (in windows) => 
  ```
  cd android && gradlew assembleDebug
  ```
	For Linux and Mac OSX:
  ```
	./gradlew assembleRelease
  ```
- https://instamobile.io/android-development/generate-react-native-release-build-android/


#### ==============================STYLES===============================
Glass background combination = back :0960d9,   front =>'#438cf075'


## NOTIFICATIONS

local Notifications => 
- yarn add @notifee/react-native
- react-native-notifications


## library2 :
- [react-native-svg](https://www.npmjs.com/package/react-native-svg)
- [react-native-image-progress](https://www.npmjs.com/package/react-native-image-progress)
- [react-native-document-picker](https://www.npmjs.com/package/react-native-document-picker)
- [react-native-app-intro-slider](https://www.npmjs.com/package/react-native-app-intro-slider)
- [React Native Reanimated](https://www.npmjs.com/package/react-native-reanimated)
- [@shopify/flash-list](https://shopify.github.io/flash-list/)
- [react-native-copilot](https://www.npmjs.com/package/react-native-copilot)
- [notifee-notification](https://notifee.app/)
- [react-native-fingerprint-scanner](https://www.npmjs.com/package/react-native-fingerprint-scanner)
- [react-native-loading-spinner-overlay](https://www.npmjs.com/package/react-native-loading-spinner-overlay)
- [convert-svg-to-RN](https://transform.tools/svg-to-react-native)
- [Moti-animation](https://moti.fyi/)
- [react-hook-form](https://react-hook-form.com/)
- [@gluestack-ui/themed](https://gluestack.io/)
- [react-native-sticky-parallax-header](https://netguru.github.io/sticky-parallax-header/docs/introduction/getting-started)
- [@react-native-firebase/app](https://rnfirebase.io/)
- [@react-native-firebase/auth](https://rnfirebase.io/)
- [@react-native-firebase/messaging](https://rnfirebase.io/)
- 
- [@react-navigation/native](https://reactnavigation.org/)
- [@react-navigation/native-stack](https://reactnavigation.org/)
- [@react-navigation/bottom-tabs](https://reactnavigation.org/)
- [@react-navigation/stack](https://reactnavigation.org/)
- 
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [react-redux](https://redux-toolkit.js.org/)
- [redux-thunk](https://redux-toolkit.js.org/)
- [redux-persist](https://www.npmjs.com/package/redux-persist)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/docs/install)
  
- [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient)
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)


### Testing Enzyme and  React Native Testing Library
[testing-enzyme](https://www.konsepkoding.com/2020/06/tutorial-testing-react-native-jest-enzyme.html)

- yarn add --dev @testing-library/react-native @testing-library/jest-native flow-typed react-test-renderer
- yarn add -D enzyme jest-environment-enzyme jest-enzyme enzyme-adapter-react-16
- yarn add react-dom@16
  FOR localstorage error in jest instal localstorage moc and include in setup test
- yarn add --dev jest-localstorage-mock

##### Edit file jest.config.js
```
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './setup-tests.js',
  ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
};
```

##### Create file ./setup-tests.js
```
// setup-tests.js

import 'react-native';
import 'jest-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import 'jest-localstorage-mock';
/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const {JSDOM} = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({adapter: new Adapter()});
```

### Sample test in App.js
```
import React from 'react';
import { View, Text } from 'react-native';

const App = () => (
  <View>
    <Text>Hello, React Native!</Text>
  </View>
);

export default App;
```
in file App-test.js
```
import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('App component renders correctly', () => {
  const { getByText } = render(<App />);
  const helloText = getByText('Hello, React Native!');
  expect(helloText).toBeTruthy();
});
```

- Then Run yarn run test