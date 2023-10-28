/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import {
  Box,
  Text,
  View,
  Button,
  Center,
  Heading,
  VStack,
} from '@gluestack-ui/themed';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import COLORS from '@/config/colors';
import {Controller, useForm} from 'react-hook-form';

const CameraComponent: React.FC = () => {
  const toast = useToast();
  const camera = useRef<Camera | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const Mydevice = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const format = useCameraFormat(Mydevice, [
    {videoResolution: {width: 1080, height: 720}},
    {fps: 30},
  ]);
  const fps = format.maxFps >= 120 ? 120 : format.maxFps;

  const openCamera = () => {
    setCameraActive(!cameraActive);
  };

  const handleCapturePhoto = async () => {
    if (!camera || !camera.current) {
      console.error('Camera is not available.');
      return;
    }

    try {
      const photo = await camera.current.takePhoto({
        qualityPrioritization: 'speed',
        flash: 'on',
        enableShutterSound: false,
      });
      console.log(JSON.stringify(photo));
      setCapturedImage(`file://${photo.path}`);
      setCameraActive(false);
    } catch (error) {
      console.error('Error capturing photo:', error);
    }
  };

  if (!Mydevice) {
    return (
      <View>
        <Text>NO CAMERA</Text>
      </View>
    );
  }
  const showToast = () => {
    toast.show(`Data Tersimpan 👍`, {
      type: 'success',
      placement: 'bottom',
      duration: 2000,
      animationType: 'zoom-in',
    });
  };

  const saveInput = () => {
    // console.warn('Data Tersimpan');
    showToast();
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  // const onSubmit = data => console.log(data);

  return (
    <SafeAreaView>
      <View>
        <VStack h={'100%'} justifyContent="space-between">
          <Center bg="black">
            {cameraActive ? (
              <Box>
                <Camera
                  ref={camera}
                  style={{flex: 1}}
                  device={Mydevice}
                  isActive={true}
                  format={format}
                  photo={true}
                />
              </Box>
            ) : (
              // camera is not active then check image then show images
              <Box h={deviceHeight / 2.5} w={deviceWidth / 1}>
                {capturedImage ? (
                  <View
                    bg="black"
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Center>
                      <Image
                        source={{uri: capturedImage}}
                        style={{width: deviceWidth, height: deviceHeight / 3}}
                      />
                    </Center>
                  </View>
                ) : (
                  <View
                    bg="black"
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Center>
                      <Heading color="white">No Photos</Heading>
                    </Center>
                  </View>
                )}
              </Box>
            )}
            {/* when camera off then icon camera,standby camera shoot icon */}
            <Center pb={15} pt={20}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  height: 50,
                  width: 70,
                  borderRadius: 100,
                }}
                onPress={cameraActive ? handleCapturePhoto : openCamera}>
                <Center pt={10}>
                  <MaterialCommunityIcons
                    name={cameraActive ? 'camera-iris' : 'camera'}
                    color={'white'}
                    size={28}
                  />
                </Center>
              </TouchableOpacity>
            </Center>
          </Center>

          <VStack
            w="100%"
            mb={15}
            style={styles.card}
            justifyContent="space-between">
            <View px={10} py={10}>
              <Text>Kilometer</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    placeholder="0"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{
                      borderWidth: 2,
                      borderColor: COLORS.gray100,
                      paddingHorizontal: 9,
                      borderRadius: 20,
                      backgroundColor: 'white',
                    }}
                  />
                )}
                name="kilometer"
              />
              {/* {errors.firstName && <Text>This is required.</Text>} */}
              <Text>Deskripsi</Text>

              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    placeholder="desc"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{
                      borderWidth: 2,
                      borderColor: COLORS.gray100,
                      borderRadius: 20,
                      paddingHorizontal: 9,
                      height: 150,
                      backgroundColor: 'white',
                    }}
                  />
                )}
                name="desc"
              />
            </View>
          </VStack>

          <View style={{paddingBottom: 4}}>
            <Center>
              <Button
                h={45}
                borderRadius={8}
                bg={COLORS.backBlue}
                width="90%"
                onPress={saveInput}>
                <TouchableOpacity onPress={saveInput}>
                  <Text color="white">Update Tracking</Text>
                </TouchableOpacity>
              </Button>
            </Center>
          </View>
        </VStack>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  card: {
    borderRadius: 15,
    // backgroundColor: 'white',
    borderColor: '#DEDEDE',
    shadowColor: '#A5A3A3',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    // elevation: 18,
    paddingHorizontal: 2,
    paddingBottom: 10,
  },
});
export default CameraComponent;
