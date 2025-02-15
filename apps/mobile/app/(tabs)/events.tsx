// import { Tables } from "@the-leftovers/supabase";
// import { getAllEvents } from "@the-leftovers/supabase";
// import React, { useEffect, useState } from "react";
// import { supabase } from "@/lib/supabase";
// import { ScrollView, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function EventsScreen() {
//     const [events, setEvents] = useState<Tables<'events'>[] | null>(null)
//     // TODO: Have a concrete type instead of unknown
//     const [presenceEvents, setPresenceEvents] = useState<unknown[] | null>(null)

//     useEffect(() => {
//         (async () => {
//             const events = await getAllEvents(supabase)
//             setEvents(events)
//         })();
        
//         (async () => {
//             const response = await fetch('https://api.presence.io/atu/v1/events')

//             if (response.ok) {
//                 const data = await response.json()
//                 setPresenceEvents(data)
//             }
//         })();
//     }, [])

//     return (
//         <SafeAreaView>
//             <ScrollView>
//                 <Text>{JSON.stringify(events, undefined, 2)}</Text>
//                 {/* <Text>{JSON.stringify(presenceEvents, undefined, 2)}</Text> */}
//             </ScrollView>
//         </SafeAreaView>
//     )
// }



import { View, Text, Pressable, ScrollView, FlatList, Image, Button } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';

export default function Events() {

    //upcomingEvent will only display if within a 24 hour time span
    const [upcomingEvent, setUpcomingEvent] = useState(true)
    const [userRegisteredEvents, setUserRegisteredEvents] = useState<any>([])
    const [currentEventData, setCurrentEventData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentEventData(tempData)
        //setUserRegisteredEvents(tempData)
    }, [])

    const showAlert = () => {
        Alert.alert(
          'Disclaimer',
          'Please keep in mind that the host of an event may not have permission to host at the posted location.',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
            { text: 'Close', onPress: () => console.log('Close Pressed') },
          ],
          { cancelable: false }
        );
      };


    /* 
    TODO: 
    merge the previous stuff from above if applitable 
     GET data,
     check time frame for upcomingevent
     set routing for all events
     set routing for all events button (Takes to search but with filter)
     set routing for view more button (Takes to search but with filter more specific for the category)
     make it possible to click the header (ADD '>') so user can click on it to redirect like view more button
    */
    return (
        <SafeAreaView className='flex-1'>
            <ScrollView showsVerticalScrollIndicator={false}>

                 <View className="mb-2 text-black bg-red-500">
                    <Button title={'Disclaimer: Tap for info.'} onPress={showAlert} color= "white" />
                </View>

                {/* Upcoming Timer */}
                {upcomingEvent && (
                    <View className='items-end mx-1 my-2'>
                        <View className='px-2 py-1 rounded shadow-xl shadow-black bg-atu-gold-v'>
                            <Text className='font-bold text-center text-white'>Upcoming: hh:mm:ss</Text>
                        </View>
                    </View>
                )}
                {/* Registered Event Container */}
                <View className='flex py-2 bg-atu-gold-vl' >
                    <Text className='px-3 font-bold text-white text-md'>Registered Events</Text>

                    {/* No Registered Events */}
                    {userRegisteredEvents.length == 0 && (
                        <View className='items-center self-center justify-center object-center w-2/3 p-4 m-5 bg-white rounded-md'>
                            <Text >No Registered Events</Text>
                            <Pressable>
                                <View className="px-3 mt-2 rounded-full bg-atu-gold-vd">
                                    <Text className="text-white ">Find Events</Text>
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

                {/* Current Event Container */}
                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Current Events</Text>
                    {/* Current Event List Container */}
                    <FlatList
                        className='py-1'
                        data={currentEventData}
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
                </View>

                {/* Future Events */}
                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Future Events</Text>
                    {/* Current Event List Container */}
                    <FlatList
                        className='py-1'
                        data={currentEventData}
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
                </View>
                {/* Past Events */}
                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Past Events</Text>
                    {/* Current Event List Container */}
                    <FlatList
                        className='py-1'
                        data={currentEventData}
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
                </View>

                {/* All News Button */}
                <Pressable className='flex items-center'>
                    <View className="px-5 py-1 mt-10 rounded-full bg-atu-gold-vd">
                        <Text className="text-lg font-bold text-white">All Events</Text>
                    </View>
                </Pressable>

            </ScrollView>
            
        </SafeAreaView>
    )
}