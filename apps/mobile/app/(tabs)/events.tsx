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



import { View, Text, Pressable, ScrollView, FlatList, Image, Button, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from 'react-native';
import { ThemeColors } from '@/constants/Colors';
import ListingComponent from '@/components/listingComponent';

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
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>


                {/* <View className="mb-2 text-black bg-red-500">
                    <Button title={'Disclaimer: Tap for info.'} onPress={showAlert} color= "white" />
                </View> */}

                {/* Upcoming Timer */}
                {upcomingEvent && (
                    <View style={styles.upcomingContainer}>
                        <View style={styles.upcomingIcon}>
                            <Text style={styles.upcomingIconText}>Upcoming: hh:mm:ss</Text>
                        </View>
                    </View>
                )}
                <ListingComponent data={[]} title='Registed Events' backgroundColor='atu-gold-vl'/>

                <ListingComponent data={[]} title='Current Events' backgroundColor='atu-green-vl'/>

                <ListingComponent data={currentEventData} title='Future Events' backgroundColor='atu-green-vl'/>
                
                <ListingComponent data={currentEventData} title='Past Events' backgroundColor='atu-green-vl'/>

                {/* All News Button */}
                <Pressable style={styles.allButtonContainer}>
                    <View style={styles.allButtonStyle}>
                        <Text style={styles.allButtonText}>All Events</Text>
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

    upcomingContainer:
    {
        alignItems: 'flex-end',
        marginHorizontal: 4,
        marginVertical: 8
    },
    upcomingIcon:
    {
        paddingVertical: 8,
        paddingHorizontal: 4,
        borderRadius: 8,
        backgroundColor: ThemeColors['atu-gold-v'],
        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
    },
    upcomingIconText:
    {
        fontWeight: 700,
        textAlign: 'center',
        color: 'white'
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
})