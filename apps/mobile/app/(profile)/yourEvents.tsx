import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, ScrollView, Text, View, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from 'expo-router';

export default function YourEvents() {
    //will need to assign proper data usestates for each
    const [upcomingEvent, setUpcomingEvent] = useState(true)
    const [userRegisteredEvents, setUserRegisteredEvents] = useState<any>([])
    const [currentEventData, setCurrentEventData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentEventData(tempData)
        //setUserRegisteredEvents(tempData)
    }, [])


    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="gap-5 py-4">
                <View className='flex pt-2 pb-4 bg-atu-gold-vl'>
                    <View className="flex-row justify-between pl-3 pr-2">
                        <Text className='text-lg font-bold text-white '>Your Hosted Events</Text>
                        <Link href="/addEvent" asChild>
                            <Pressable>
                                <MaterialCommunityIcons name="plus-circle" size={28} color="white" />
                            </Pressable>
                        </Link>
                    </View>

                    {/* No Hosted Events */}
                    {userRegisteredEvents.length == 0 && (
                        <View className='items-center self-center justify-center object-center w-2/3 p-6 mt-2 mb-4 bg-white rounded-md'>
                            <Text >Not Hosting Any Events</Text>
                            <Pressable>
                                <View className="px-3 py-1 mt-2 rounded-full bg-atu-gold-vd">
                                    <Text className="font-bold text-white">Host Events</Text>
                                </View>
                            </Pressable>
                        </View>)}

                    {userRegisteredEvents.length != 0 && (
                        <FlatList
                            className='py-1'
                            data={userRegisteredEvents}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                //Last Item Redirect
                                if (index == currentEventData.length - 1) {
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
                    )}
                </View>

                <View className='flex pt-2 pb-4 bg-atu-gold-vl'>
                    <Text className='px-3 text-lg font-bold text-white'>Registered Events</Text>

                    {/* No Registered Events */}
                    {userRegisteredEvents.length == 0 && (
                        <View className='items-center self-center justify-center object-center w-2/3 p-6 mt-2 mb-4 bg-white rounded-md'>
                            <Text >No Registered Events</Text>
                            <Pressable>
                                <View className="px-3 py-1 mt-2 rounded-full bg-atu-gold-vd">
                                    <Text className="font-bold text-white">Find Events</Text>
                                </View>
                            </Pressable>
                        </View>)}

                    {userRegisteredEvents.length != 0 && (
                        <FlatList
                            className='py-1'
                            data={userRegisteredEvents}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                //Last Item Redirect
                                if (index == currentEventData.length - 1) {
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
                    )}
                </View>

                <View className='flex pt-2 pb-4 bg-atu-gold-vl'>
                    <Text className='px-3 text-lg font-bold text-white'>Event History</Text>

                    {/* Event History */}
                    {userRegisteredEvents.length == 0 && (
                        <View className='items-center self-center justify-center object-center w-2/3 p-10 mt-2 mb-4 bg-white rounded-md'>
                            <Text >No Event History</Text>
                        </View>)}

                    {userRegisteredEvents.length != 0 && (
                        <FlatList
                            className='py-1'
                            data={userRegisteredEvents}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                //Last Item Redirect
                                if (index == currentEventData.length - 1) {
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
                    )}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}