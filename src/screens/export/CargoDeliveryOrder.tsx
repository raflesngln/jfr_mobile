import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import useFetchingDetail from '@/services/tracking/useDataDetails';
import {Divider} from '@gluestack-ui/themed';

type DetailScreenProps = {
  // Add props if your component accepts any
};

const DetailJobsScreen: React.FC<DetailScreenProps> = () => {
  const route = useRoute();
  const {id, title} = route.params;

  const {data, loading, error} = useFetchingDetail({
    url: `https://dummyjson.com/users/${id}`,
  }); // Use the custom hook

  return (
    <View style={{flex: 1, paddingTop: 12, paddingHorizontal: 10}}>
      <Text style={{fontSize: 18, color: 'red'}}>DetailJobs Screen</Text>
      <Text style={{fontSize: 18, color: 'red'}}>{title}</Text>
      <Text style={{fontSize: 18, color: 'red'}}>{id}</Text>
      <Divider />
      <Text style={{fontSize: 18, color: 'red'}}>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default DetailJobsScreen;
