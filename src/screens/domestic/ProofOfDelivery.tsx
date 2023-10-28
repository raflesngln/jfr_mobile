import React, {useState} from 'react';
import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonText,
  Divider,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
} from '@gluestack-ui/themed';
import {Text, View, TextInput, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {setDataLogin, logout, changeDarkMode} from '@/redux/apps/ProfileSlice';
import {useAppSelector, useAppDispatch} from '@/redux/hooks';

const InputJobsScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({username: '', password: ''});
  const dataProfile = useAppSelector(state => state.profile);
  const datalogin = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Data Login adalah : ', data);
    const dataPatch = {
      isLogin: true,
      username: data.username,
      profilePicture: 'raflesngln.png',
      value: 9990,
      darkMode: 'light',
    };
    dispatch(setDataLogin(dataPatch));
  };

  return (
    <View style={{flex: 1, paddingTop: 12, paddingHorizontal: 10}}>
      <Text style={{fontSize: 18, color: 'red'}}>InputJobs Screen</Text>

      <Box h="$32" w="$72">
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="First name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="username"
          />
          {errors.username && <Text>This is required.</Text>}

          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder="Last name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />

          <Button onPress={handleSubmit(onSubmit)}>
            <Text>Submit Login</Text>
          </Button>
        </View>
      </Box>
      <View style={{marginTop: 290}}>
        <Text style={{color: 'red'}}>{JSON.stringify(input)}</Text>
        <Text style={{color: 'red'}}>
          DATA PROFILE : {JSON.stringify(dataProfile)}
        </Text>
        <Divider my="$0.5" />
        <Text style={{color: 'red'}}>
          DATA LOGIN : {JSON.stringify(datalogin)}
        </Text>
      </View>
    </View>
  );
};

export default InputJobsScreen;
