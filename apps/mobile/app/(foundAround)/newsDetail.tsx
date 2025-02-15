import { SafeAreaView } from "react-native-safe-area-context"
import { Pressable, ScrollView, Text, View, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import ReportPost from "@/components/reportPost";
import { Link } from "expo-router";

export default function NewsDetail() {

    const [reportPostModal, setReportPostModal] = useState(false)

    return (
        <SafeAreaView >
            <ScrollView className="flex">
                <Text className="my-3 text-3xl font-bold text-center"> News Title</Text>
                <View className="flex-row">
                    <Image style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} className="bg-atu-green-vl2 aspect-video" resizeMode='contain' source={require('../../assets/images/Pickle.png')} />
                </View>

                <View className="flex px-5">
                    <View className="flex-row justify-between">
                        <Text className="text-md">By: Author</Text>
                        <Text className="text-md">Publish Date</Text>
                    </View>
                    <Text className="text-xl">Summary</Text>
                    <Link href="/(profile)/defaultProfile" asChild>
                        <Pressable>
                            <Text className="text-lg text-center text-atu-gold-vd">Shared By: Department/Club</Text>
                        </Pressable>
                    </Link>
                </View>

                <Pressable onPress={() => { setReportPostModal(true) }} className="items-end">
                    <MaterialCommunityIcons name="comment-alert-outline" size={45} color="#F44336" />
                </Pressable>

            </ScrollView>

            <ReportPost isVisible={reportPostModal} close={() => { setReportPostModal(false) }} delete={() => { }} />

        </SafeAreaView>
    )
}