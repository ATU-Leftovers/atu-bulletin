import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Image, Pressable, View, ScrollView } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import ReportPost from "@/components/reportPost";

export default function EventDetail() {
    []

    const [reportPostModal, setReportPostModal] = useState(false)

    return (
        <SafeAreaView >
            <ScrollView className="flex">
            <Text className="my-3 text-3xl font-bold text-center"> Event Title</Text>
                <View className="flex-row">
                    <Image style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} className="bg-atu-green-vl2 aspect-video" resizeMode='contain' source={require('../../assets/images/Pickle.png')} />
                </View>
                
                <View className="flex px-5">
                    <Text className="text-2xl font-bold">Location</Text>
                    <Text className="text-2xl font-bold">Date, Time</Text>
                    <Pressable onPress={() => { }} className='items-baseline px-2 py-2'>
                        <View className="px-5 rounded-full bg-atu-gold-vd">
                            <Text className="text-base font-bold text-white">Map</Text>
                        </View>
                    </Pressable>
                    <Text>Summary</Text>
                    <View className="flex-row justify-between">
                        <Text className="text-lg font-bold">Hosted by: User</Text>
                        <Pressable onPress={() => { }} className='items-baseline px-2 pb-2'>
                            <View className="px-5 rounded-full bg-atu-gold-vd">
                                <Text className="text-lg text-white">Register For Event</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>

                <Pressable onPress={() =>{setReportPostModal(true)}} className="items-end">
                    <MaterialCommunityIcons name="comment-alert-outline" size={45} color="#F44336" />
                </Pressable>

            </ScrollView>

            <ReportPost isVisible={reportPostModal} close={()=>{setReportPostModal(false)}} delete={() => { }}/>

        </SafeAreaView>
    )
}