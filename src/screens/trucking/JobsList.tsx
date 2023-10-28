/* eslint-disable react-hooks/exhaustive-deps */
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
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import COLORS from '@/config/colors';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyLoader from '@/components/sceleton/simple';

import IndicatorLoading from '@/components/loading/IndicatorLoading';

import {logout} from '@/redux/apps/ProfileSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

import {ListData} from '@/services/tracking/TrackingData';

type ItemProps = {title: string};

const Item = ({data}: any) => {
  const navigation = useNavigation<any>();

  return (
    <VStack
      key={data.id}
      w="100%"
      mb={15}
      style={styles.card}
      justifyContent="space-between">
      <HStack mb={2} justifyContent="space-between">
        <Heading>{data.id_job}</Heading>
        <Text
          bg={COLORS.gray100}
          px={13}
          py={3}
          borderRadius={30}
          color={COLORS.gray600}>
          {'Unloading'}
        </Text>
        {/* </Box> */}
      </HStack>
      <Divider my={5} />
      <HStack mt={6} justifyContent="space-between">
        <Box>
          <Text color={COLORS.textGray}>Customer</Text>
          <Text>{data.customer_name}</Text>
        </Box>
        <Box>
          <Text color={COLORS.textGray}>PIC</Text>
          <Text>{data.koli}</Text>
        </Box>
      </HStack>
      <HStack justifyContent="space-between">
        <Box>
          <Text color={COLORS.textGray}>Est Pickup</Text>
          <Text>{data.est_time}</Text>
        </Box>
        <Box>
          <Text color={COLORS.textGray}>Koli</Text>
          <Text>{data.koli}</Text>
        </Box>
      </HStack>
      <Box>
        <Text color={COLORS.textGray}>Alamat</Text>
        <Text>{data.delivery_loc}</Text>
      </Box>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TruckingStack', {
            screen: 'DetailJobs',
            params: {id: data.id, item: data, title: 'Detail Jobs'},
          })
        }
        style={{
          backgroundColor: COLORS.black400,
          paddingHorizontal: 9,
          width: '100%',
          borderRadius: 100,
          height: 38,
          marginTop: 6,
        }}>
        <Center py={6}>
          <Text color="white" fontSize={16}>
            PROSES
          </Text>
        </Center>
      </TouchableOpacity>
    </VStack>
  );
};

///

const ExportScreen: React.FC = (props: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [per_page, setPer_Page] = useState(10);

  const changePaging = () => {
    setLoading(true);
    setPage(page + 1);
    console.log('GANTI PAGING');
    // setLoading(false);
  };

  const getDataTrucking = async () => {
    const resp = await ListData({
      endpoint: 'job_dispacth_fcl',
      page: page,
      per_page: per_page,
      order_by: 'id',
      order_direction: 'asc',
    });
    setItemData(resp);
    setLoading(false);
  };

  useEffect(() => {
    getDataTrucking();
  }, [loading, page]);

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
          <Heading color="white">JOB OPEN</Heading>
          <TouchableOpacity>
            <FontAwesome name="search" color="white" size={25} />
          </TouchableOpacity>
        </HStack>
      </Box>

      {loading && (
        <VStack bg={COLORS.gray200} h={'95%'} justifyContent="flex-start">
          <IndicatorLoading />
        </VStack>
      )}
      {/* <Box mt={8} mb={5}>
        <TouchableOpacity
          style={{backgroundColor: 'red', height: 45}}
          onPress={changePaging}>
          <Text color="$white">Change {page}</Text>
        </TouchableOpacity>
      </Box> */}

      <VStack bg={COLORS.gray200} h={'95%'} px={10} justifyContent="flex-start">
        {/* <Text>{JSON.stringify(truckData)}</Text> */}
        <Divider my={5} />
        <Box pb={19} h="89%">
          <FlatList
            data={itemData}
            extraData={itemData}
            renderItem={({item}) => <Item data={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </Box>
      </VStack>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
export default ExportScreen;
