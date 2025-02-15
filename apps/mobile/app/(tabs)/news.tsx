import { View, Text, Pressable, ScrollView, FlatList, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context"
// import PagerView from 'react-native-pager-view';


//TODO: Data connection, and carosel if can

export default function News() {
    const [currentNewsData, setCurrentNewsData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentNewsData(tempData)
        //setUserRegisteredEvents(tempData)
    }, [])

    return (
        <SafeAreaView >
            <ScrollView >

                {/*                 
                <PagerView className='w-full bg-blue-800 h-1/2' initialPage={0}>
                    <View className='h-full bg-pink-700' collapsable={false} key="1">
                        <Text>First page</Text>
                        <Text>Swipe ➡️</Text>
                    </View>
                    <View className='bg-pink-700' key="2">
                        <Text>Second page</Text>
                    </View>
                    <View className='bg-pink-700' key="3">
                        <Text>Third page</Text>
                    </View>
                </PagerView> */}


                {/* News for you */}
                <View className='py-2 mt-4 bg-atu-gold-vl'>
                    <Text className='pl-4 font-bold text-white'>News For You</Text>
                    {/* Current Event List Container */}
                    <FlatList
                        className='py-1'
                        data={currentNewsData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            //Last Item Redirect
                            if (index == currentNewsData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-44 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            //Render Regular Items
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-44 w-28'>
                                        <Image className="bg-gray-400 h-28 aspect-square" source={require('../../assets/images/Pickle.png')} />
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Autddddddddddddddddddddddddddddddddddddddddadsahor</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Titdwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwle</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Publish:Date, Timewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>
                {/* Hot Topic List */}
                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Hot Topics</Text>
                    {/* Current Event List Container */}
                    <FlatList
                        className='py-1'
                        data={currentNewsData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            //Last Item Redirect
                            if (index == currentNewsData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-44 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            //Render Regular Items
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-44 w-28'>
                                        <Image className="bg-gray-400 h-28 aspect-square" source={require('../../assets/images/Pickle.png')} />
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Autddddddddddddddddddddddddddddddddddddddddadsahor</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Titdwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwle</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Publish:Date, Timewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>
                <Pressable className='flex items-center'>
                    <View className="px-5 py-1 m-10 rounded-full bg-atu-gold-vd">
                        <Text className="text-lg font-bold text-white">All News</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});