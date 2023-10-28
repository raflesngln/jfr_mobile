import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingSpinner = ({visible}: any) => {
  return (
    <Spinner
      visible={visible}
      textContent={'Loading...'}
      textStyle={{color: '#FFF'}}
    />
  );
};

export default LoadingSpinner;
