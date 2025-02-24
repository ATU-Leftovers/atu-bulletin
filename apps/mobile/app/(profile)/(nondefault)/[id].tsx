import ListingComponent from "@/components/listingComponent";
import { ThemeColors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from "react-native";

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
                <View style={styles.pinContainter}>
                    <View style={styles.pinStyle}>
                        <Text style={styles.pinText}>Pin</Text>
                    </View>
                </View>

                <View style={styles.bannerContainer}>
                    <Image style={styles.bannerImage} resizeMode='contain' source={require('../../../assets/images/Test.png')} />
                </View>


                <ListingComponent title="Events" backgroundColor="atu-green-vl" data={[]}/>
                <ListingComponent title="News" backgroundColor="atu-green-vl" data={[]}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pinContainter:
    {
        alignItems: 'flex-end',
        marginVertical: 4,
        marginHorizontal: 8
    },
    pinStyle:
    {
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginRight:12,
        borderRadius: 999,
        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
        backgroundColor: ThemeColors['atu-gold-vd']
    },
    pinText:
    {
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center',
        color: 'white'
    },
    bannerContainer:
    {
        flexDirection: 'row',
        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
    },
    bannerImage:
    {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
        backgroundColor: ThemeColors['atu-green-vl2'],
        aspectRatio: 16/9
    }

})



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