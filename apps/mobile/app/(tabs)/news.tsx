import { View, Text, Pressable, ScrollView, FlatList, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context"
import ListingComponent from '@/components/listingComponent';
import { ThemeColors } from '@/constants/Colors';

//TODO: Data connection, and carosel if can

export default function News() {
    const [currentNewsData, setCurrentNewsData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentNewsData(tempData)
        //setUserRegisteredEvents(tempData)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListingComponent data={currentNewsData} title='News for You' backgroundColor='atu-gold-vl'/>        
                <ListingComponent data={[]} title='Hot Topics' backgroundColor='atu-green-vl'/>
                <ListingComponent data={[]} title='Latest News' backgroundColor='atu-green-vl'/>

                {/* All News Button */}
                <Pressable style={styles.allButtonContainer}>

                    <View style={styles.allButtonStyle}>
                        <Text style={styles.allButtonText}>All News</Text>
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

        allButtonContainer:
        {
            flex:1,
            alignItems:'center'
        },
        allButtonStyle:
        {
            paddingHorizontal: 20,
            paddingVertical: 4,
            marginVertical: 40,
            borderRadius: 999,
            backgroundColor: ThemeColors['atu-gold-vd']
        },
        allButtonText:
        {
            fontSize: 18,
            fontWeight: 700,
            color: 'white'
        }
});