import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeColors } from '@/constants/Colors';



export default function MyPager() {
  const [currentNewsData, setCurrentNewsData] = useState<any>([])


  useEffect(() => {
    const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 23 }, { id: 33 }, { id: 43 }, { id: 53 }, { id: 63 }, { id: 12 }, { id: 22 }, { id: 32 }, { id: 42 }, { id: 52 }, { id: 62 }, { id: 72 }, { id: 82 }, { id: 92 },]
    setCurrentNewsData(tempData)

  }, [])

  return (

    <SafeAreaView className=''>
      <View style={styles.headerContainer}>
        <View style={styles.headerSearchContainer}>
          <Ionicons name="search-circle-sharp" size={28} color="gray" />
        </View>
        <View style={styles.headerFilterContainer}>
          <Text style={styles.headerFilterText}>Filter</Text>
        </View>
      </View>


      <View style={styles.flatListContainer}>
        <FlatList
          style={{ marginBottom: 112 }}
          data={currentNewsData}
          showsVerticalScrollIndicator={false}
          numColumns={3}

          renderItem={({ item, index }) => {
            return (
              <View style={styles.flatListItemContainer}>
                <Image style={styles.flatListItemImage} source={require('../../assets/images/Pickle.png')} />
                <View style={styles.flatListItemTextContainer}>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.flatListItemDarkerText}>Autddddddddddddddddddddddddddddddddddddddddadsahor</Text>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.flatListItemText}>Titdwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwle</Text>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.flatListItemDarkerText}>Publish:Date, Timewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
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
  headerContainer:
  {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-evenly',
    backgroundColor: ThemeColors['atu-green-vl']
  },
  headerSearchContainer:
  {
    width: '40%',
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: ThemeColors['gray'],
    borderRadius: 999
  },
  headerFilterContainer:
  {
    width: '40%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 4,
    borderRadius: 999,
    borderColor: ThemeColors['atu-gold-vd']
  },
  headerFilterText:
  {
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    color: ThemeColors['atu-gold-vd']
  },

  flatListContainer:
  {
    alignItems: 'center'
  },
  flatListItemContainer:
  {
      backgroundColor: ThemeColors['gray'],
      height: 182,
      width: 112,
      margin:8

  },
  flatListItemImage:
  {
      height: 112,
      aspectRatio: 1 / 1
  },
  flatListItemTextContainer:
  {
      height: '100%',
      gap: 4,
      padding: 4
  },
  flatListItemDarkerText:
  {
      color: '#e5e7eb',
      fontSize: 12,
  },
  flatListItemText:
  {
      color: 'white',
      fontSize: 12,
  }

});
