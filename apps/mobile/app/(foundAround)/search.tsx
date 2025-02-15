import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image, FlatList } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@expo/vector-icons/Ionicons';



export default function MyPager() {
  const [currentNewsData, setCurrentNewsData] = useState<any>([])


  useEffect(() => {
    const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 23 }, { id: 33 }, { id: 43 }, { id: 53 }, { id: 63 }, { id: 12 }, { id: 22 }, { id: 32 }, { id: 42 }, { id: 52 }, { id: 62 }, { id: 72 }, { id: 82 }, { id: 92 },]
    setCurrentNewsData(tempData)

  }, [])

  return (

    <SafeAreaView className=''>
      <View className='flex-row py-2 justify-evenly bg-atu-green-vl'>
        <View className='w-2/5 bg-white border-4 border-gray-500 rounded-full'>
          <Ionicons name="search-circle-sharp" size={28} color="gray" />
        </View>
        <View className='justify-center w-2/5 bg-white border-4 rounded-full border-atu-gold-vd'>
          <Text className='text-lg font-bold text-center text-atu-gold-vd' >Filter</Text>
        </View>
      </View>
      <View className='items-center'>
        <FlatList
          className='mb-28'
          data={currentNewsData}
          showsVerticalScrollIndicator={false}
          numColumns={3}

          renderItem={({ item, index }) => {
            return (
              <View className='m-2 bg-gray-600 h-44 w-28'>
                <Image className="bg-gray-400 h-28 aspect-square" source={require('../../assets/images/Pickle.png')} />
                <View className='h-full gap-1 p-1'>
                  <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Autddddddddddddddddddddddddddddddddddddddddadsahor</Text>
                  <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Titdwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwle</Text>
                  <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Publish:Date, Timewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
                </View>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: '100%',
    height: '100%'
  },
});
