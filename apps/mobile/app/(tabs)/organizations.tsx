import { View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context"
import ListingComponent from '@/components/listingComponent';
import { ThemeColors } from '@/constants/Colors';

export default function Organizations() {

    const [currentData, setCurrentData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
        setCurrentData(tempData)
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.banner}>
                <Text style={styles.bannerText}>ATU Clubs and Organizations</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <ListingComponent data={currentData} title='Academic' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Advocacy/Awarness' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Arts' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Campus Involvement' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Community Service' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Cultural' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Greek' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Hobby/Interest' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Political' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Sports' backgroundColor='atu-green-vl'/>
                <ListingComponent data={currentData} title='Religious' backgroundColor='atu-green-vl'/>

            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    banner: {
        paddingVertical: 20,
        backgroundColor: ThemeColors['atu-gold-vd']
    },

    bannerText: {
        color: 'white',
        fontWeight: 900,
        textAlign: 'center',
    }
});


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