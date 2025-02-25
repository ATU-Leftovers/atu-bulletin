import { SafeAreaView } from "react-native-safe-area-context"
import { Pressable, ScrollView, Text, View, Image, StyleSheet, useColorScheme } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import ReportPost from "@/components/reportPost";
import { Link } from "expo-router";
import { ThemeColors } from '@/constants/Colors';

export default function NewsDetail() {

    let colorScheme = useColorScheme();
    const [reportPostModal, setReportPostModal] = useState(false)

    return (
        <SafeAreaView style={styles.container}  >
            <ScrollView className="flex">
                <Text className="my-3 text-3xl font-bold text-center"style={{...styles.Title, backgroundColor: ThemeColors(colorScheme)['atu-gold-vd']}}> News Title</Text>
                <View className="flex-row">
                    <Image style={styles.Image} className="bg-atu-green-vl2 aspect-video" resizeMode='contain' source={require('../../assets/images/Pickle.png')} />
                </View>

                <View className="flex px-5">
                    <View className="flex-row justify-between">
                        <Text className="text-md" style={{...styles.Author, backgroundColor: ThemeColors(colorScheme)['atu-gold-vd']}}>By: Author</Text>
                        <Text className="text-md" style={{...styles.Author, backgroundColor: ThemeColors(colorScheme)['atu-gold-vd']}}>Publish Date: 2/24/25</Text>
                    </View>
                    <Text className="text-xl" style={styles.Text}>I am writing more substantial text in this particular part to test the effectiveness of this formatting in the styles. jtkrhdtjgkzskjvsjkjkgndkjgnhxfjkdhkdjvnkjgndkjgndfjkgdnklgxdngdfnjgkfndlkkdgnfdjghfdkgjxdlgnkjgdfjl</Text>
                    <Link href="/(profile)/defaultProfile" asChild>
                        <Pressable>
                            <Text className="text-lg text-center text-atu-gold-vd" style={{...styles.Author, backgroundColor: ThemeColors(colorScheme)['atu-gold-vd']}}>Shared By: Department/Club</Text>
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

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    Title:{
        fontSize: 20,
        padding: 10,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    Author:{
    padding: 5,
    marginLeft: 2,
    marginRight: 2,
    fontWeight: 'bold',
    },

    Text:{
        padding: 3,
        marginLeft: 2,
        marginRight: 2,
    },

    Image:{
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1, 
        width: 425,
        height: 400,
    }
    
})