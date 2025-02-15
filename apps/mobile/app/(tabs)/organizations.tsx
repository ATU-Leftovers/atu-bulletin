import { View, Text, ScrollView, FlatList,} from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context"

export default function Organizations() {

    const [currentData, setCurrentData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
        setCurrentData(tempData)
    }, [])

    return (
        <SafeAreaView>

            <View className='py-4 bg-atu-gold-vl'>
                <Text className='pl-4 font-bold text-center text-white'>ATU Clubs and Organizations</Text>
            </View>

            <ScrollView>
                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Academic</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Advocacy/Awarness</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Arts</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Campus Involvement</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Community Service</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Cultural</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Greek</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Hobby/Interest</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Political</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Sports</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>

                <View className='py-2 mt-4 mb-14 bg-atu-green-vl'>
                    <Text className='pl-4 font-bold text-white'>Religious</Text>
                    <FlatList
                        className='py-1'
                        data={currentData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            if (index == currentData.length - 1) {
                                return (
                                    <View className='items-center justify-center mx-4 bg-gray-600 h-28 w-28'>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text className='font-bold text-white'>View More</Text>
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View className='ml-4 bg-gray-600 h-28 w-28'>
                                        <View className='h-full gap-1 p-1'>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs font-bold text-white'>Name</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' className='text-xs text-gray-200'>Description: </Text>
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


// TODO merge old organizations

// import React, { useEffect, useState } from "react";
// import { ScrollView, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { getOrganizations } from "@the-leftovers/supabase";
// import { supabase } from "@/lib/supabase";

// export default function OrganizationsScreen() {
//     const [organizations, setOrganizations] = useState(null)

//     useEffect(() => {
//         (async () => {
//             const orgs = await getOrganizations(supabase)
//             setOrganizations(orgs)
//         })()
//     }, [])

//     // function handleOrgPress(orgId: string) {
//     //     router.push(`/organizations/${orgId}`)
//     // }

//     return (
//         <SafeAreaView>
//             <ScrollView>
//                 <Text>{JSON.stringify(organizations, undefined, 2)}</Text>
//                 {/* {organizations?.map((org) => (
//                     <TouchableOpacity key={org.id} onPress={() => handleOrgPress(org.id)}>
//                         <View>
//                             <Text>{org.name}</Text>
//                             <Text>{org.description}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 ))} */}
//             </ScrollView>
//         </SafeAreaView>
//     )
// }