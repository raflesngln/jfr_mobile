/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Text,
  AvatarFallbackText,
  AvatarImage,
  Button,
  HStack,
  Heading,
  VStack,
  Center,
  Box,
  Divider,
  Badge,
  BadgeText,
  BadgeIcon,
  GlobeIcon,
} from '@gluestack-ui/themed';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import COLORS from '@/config/colors';
import StepIndicator from 'react-native-step-indicator';
import dummyData from './data';
import {createClient} from '@supabase/supabase-js';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {logout} from '@/redux/apps/ProfileSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

import {DetailData} from '@/services/tracking/TrackingData';
import {ListMasterTracking} from '@/services/ms_tracking/ms_tracking';

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
  'Track',
  'Track',
  'Track',
  'Track',
];
const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013',
};

const DetailJobsScreen: React.FC = (props: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const [currentPage, setCurrentPage] = React.useState<number>(2);
  const [refreshing, setRefreshing] = React.useState(false);
  const [itemData, setItemData] = useState(null);
  const [masterTracking, setMasterTracking] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [per_page, setPer_Page] = useState(10);
  const {id, item, title} = route.params;

  const [currentPosition, SetCurrentPosition] = useState(2);

  const counting: number = 4;
  const CustomLabel = ({item}: any) => {
    return <Text>{item.title}</Text>;
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const createInput = (title: string) => {
    navigation.navigate('TruckingStack', {
      screen: 'InputTracking',
      params: {id: 1, title: title},
    });
  };

  const getDataTrucking = async () => {
    const resp = await DetailData({
      endpoint: `job_dispacth_fcl/${id}`,
    });
    setItemData(resp);
    setLoading(false);
  };
  const getMasterTracking = async () => {
    const resp = await ListMasterTracking({
      endpoint: 'ms_tracking',
      page: 1,
      per_page: 10,
      order_by: 'id',
      order_direction: 'asc',
    });
    setMasterTracking(resp);
    setLoading(false);
  };

  useEffect(() => {
    getMasterTracking();
    getDataTrucking();
  }, []);

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />
      <Box px={15} pt={20} h={80} w="100%" bg={COLORS.primary}>
        <HStack mt={15} justifyContent="space-between">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Heading color="white">
              {' '}
              <MaterialIcons name="arrow-back-ios" color="white" size={25} />
            </Heading>
          </TouchableOpacity>
          <Heading color="white">Detail Job</Heading>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" color="white" size={25} />
          </TouchableOpacity>
        </HStack>
      </Box>

      <SafeAreaView style={[styles.container]}>
        {/* <ScrollView style={[styles.container, {backgroundColor: 'red'}]}> */}
        <ScrollView
          // contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <VStack
            bg={COLORS.gray200}
            // h={'95%'}
            px={10}
            justifyContent="flex-start">
            <Divider my={5} />
            <Box pb={19} h="96%">
              <VStack
                w="100%"
                mb={15}
                style={styles.card}
                justifyContent="space-between">
                <Center px={8} mb={10} justifyContent="space-between">
                  <Heading
                    size="xl"
                    underline={true}
                    color={COLORS.primaryDark}>
                    {item?.customer_name}
                  </Heading>
                </Center>
                <HStack px={8} mt={0} justifyContent="space-between">
                  <Text color={COLORS.gray500}>Nomor JOB :</Text>
                  <Heading>{item?.id_job}</Heading>
                </HStack>
                <HStack px={8} mt={0} justifyContent="space-between">
                  <Text color={COLORS.gray500}>Status:</Text>
                  <Text>{'Unloading'}</Text>
                </HStack>
                <HStack px={8} mt={6} justifyContent="space-between">
                  <Text color={COLORS.gray500}>Jumlah Barang:</Text>
                  <Text>{item?.koli} Koli</Text>
                </HStack>
                <HStack px={8} mt={6} justifyContent="space-between">
                  <Text color={COLORS.gray500}>Est Waktu Pickup:</Text>
                  <Text>{item?.est_time}</Text>
                </HStack>
              </VStack>
              <VStack
                w="100%"
                mb={15}
                style={styles.card}
                justifyContent="space-between">
                <VStack px={8} mt={0} justifyContent="space-between">
                  <Heading color={COLORS.gray500}>Deskripsi Barang:</Heading>
                  <Text>{item?.delivery_loc}</Text>
                  <Text color={COLORS.gray500}>{JSON.stringify(itemData)}</Text>
                </VStack>
              </VStack>

              {/* <View
                style={{
                  height: 800,
                  backgroundColor: 'white',
                  flex: 1,
                  flexWrap: 'wrap',
                  paddingHorizontal: 19,
                }}>
                <StepIndicator
                  customStyles={stepIndicatorStyles}
                  stepCount={9}
                  direction="vertical"
                  currentPosition={currentPage}
                  labels={labels}
                  renderLabel={({position, stepStatus}) => {
                    return (
                      <View
                        style={{
                          backgroundColor: 'white',
                          width: '100%',
                          marginTop: 50,
                        }}>
                        <Heading style={{color: 'black'}}>
                          {dummyData.data[position].title} {'\n'}
                        </Heading>
                        <Text style={{color: 'black', marginTop: -19}}>
                          Example Label{'\n'}
                        </Text>
                      </View>
                    );
                  }}
                  renderStepIndicator={({position, stepStatus}) => (
                    <VStack>
                      <Text
                        style={{
                          marginTop: 10,
                          marginBottom: 10,
                          // backgroundColor: 'red',
                        }}>
                        <MaterialIcons
                          name={currentPage < position ? 'arrow-right' : 'done'}
                          color={COLORS.primary}
                          size={stepStatus ? 25 : 25}
                        />
                        {position}
                      </Text>
                    </VStack>
                  )}
                />
              </View> */}
              {/* </View> */}
              {/* <GetDataSupabase /> */}
              <Heading color={COLORS.gray400}>Tracking Progres</Heading>
              <VStack
                w="100%"
                mb={15}
                mt={5}
                style={styles.card}
                justifyContent="space-between">
                {masterTracking.map((val: any, i: number) => {
                  return (
                    <HStack
                      ml={15}
                      key={i}
                      px={8}
                      mt={6}
                      pb={30}
                      justifyContent="space-between"
                      style={{
                        borderLeftColor:
                          currentPage > i
                            ? COLORS.textSecondary
                            : COLORS.gray200,
                        borderLeftWidth: i + 1 == masterTracking.length ? 0 : 3,
                        borderStyle: currentPage > i ? 'solid' : 'dotted',
                      }}>
                      <Box w="10%" ml={-24} mt={-15}>
                        {/* this for item cicrcle step */}
                        <Center
                          bg={currentPage > i ? COLORS.lime00 : COLORS.gray100}
                          borderWidth={3}
                          borderColor={
                            currentPage > i ? COLORS.lime100 : COLORS.gray300
                          }
                          w={30}
                          h={30}
                          borderRadius={100}>
                          <Text>
                            <MaterialIcons
                              name={currentPage > i ? 'done' : 'loop'}
                              color={
                                currentPage > i ? COLORS.white : COLORS.gray400
                              }
                              size={25}
                            />
                          </Text>
                        </Center>
                      </Box>
                      <Box w="88%" mt={-15}>
                        <Heading>{val.title}</Heading>
                        <Text>
                          {val.description}
                          {/* {i + 1 == labels.length ? 'akhir' : 'no'} */}
                        </Text>
                        <Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Adipisci, vitae.
                        </Text>
                      </Box>
                    </HStack>
                  );
                })}
              </VStack>
            </Box>
          </VStack>
        </ScrollView>
        <View style={{paddingBottom: 4}}>
          <Center bg="white">
            <Button
              h={45}
              borderRadius={8}
              bg={COLORS.black400}
              width="90%"
              onPress={() => createInput(dummyData.data[currentPage].title)}>
              <TouchableOpacity
                onPress={() => createInput(dummyData.data[currentPage].title)}>
                <Text color="white">{dummyData.data[currentPage].title}</Text>
              </TouchableOpacity>
            </Button>
          </Center>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

function GetDataSupabase() {
  const [resdata, setResData] = useState<any>(null);

  return (
    <Box>
      <Text>This data base supabase</Text>
    </Box>
  );
}
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
    backgroundColor: 'white',
    borderColor: '#DEDEDE',
    shadowColor: '#A5A3A3',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    paddingHorizontal: 6,
    paddingVertical: 15,
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  containerStep: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    // marginVertical: 0,
    // paddingHorizontal: 10,
    marginTop: 10,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DetailJobsScreen;
