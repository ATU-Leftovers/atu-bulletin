import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, FlatList } from "react-native";

export default function NonDefaultProfile() {

    const [currentEventData, setCurrentEventData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentEventData(tempData)
        //setUserRegisteredEvents(tempData)
    }, [])

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className='items-end mx-1 my-2'>
                    <View className='px-4 py-1 mr-3 rounded-full shadow-md shadow-black bg-atu-gold-v'>
                        <Text className='text-lg font-bold text-center text-white'>Pin</Text>
                    </View>
                </View>

                <View className="flex-row" style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }}>
                    <Image style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} className=" bg-atu-green-vl2 aspect-video" resizeMode='contain' source={require('../../../assets/images/Test.png')} />
                </View>


                <View className='flex py-2 mt-5 bg-atu-green-vl' style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }}>
                    <Text className='px-3 text-lg font-bold text-white'>Events</Text>
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
                                        <Image className="bg-gray-400 h-28 aspect-square" source={require('../../../assets/images/Pickle.png')} />
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
                
                <View className='flex py-2 mt-5 mb-5 bg-atu-green-vl' style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }}>
                    <Text className='px-3 text-lg font-bold text-white'>News</Text>
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
                                        <Image className="bg-gray-400 h-28 aspect-square" source={require('../../../assets/images/Pickle.png')} />
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
            </ScrollView>
        </SafeAreaView>
    )
}


//TODO: MERGE [id]


// import React, { useEffect, useState } from "react";
// import { Text, View, ActivityIndicator, ScrollView } from "react-native";
// import { useLocalSearchParams } from "expo-router";
// import { fetchOrganization, fetchOrganizationMembers, supabase } from "@/lib/supabase";
// import { Tables } from "@/database.types";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function OrganizationDetailsScreen() {
//     const { id } = useLocalSearchParams()
//     const [organization, setOrganization] = useState<Tables<"organizations"> | null>(null)

//     useEffect(() => {
//         async function fetchOrgDetails() {
//             const org = await fetchOrganization(id as string)
//             setOrganization(org)
//         }

//         fetchOrgDetails()
//     }, [])

//     return (
//         <SafeAreaView>
//             <ScrollView>
//                 <Text>{JSON.stringify(organization, undefined, 2)}</Text>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }