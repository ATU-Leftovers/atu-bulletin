import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, ScrollView, Text, View, Image, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from 'expo-router';
import { ThemeColors } from '@/constants/Colors';
import ListingComponent from '@/components/listingComponent';

export default function YourEvents() {
    //will need to assign proper data usestates for each
    const [upcomingEvent, setUpcomingEvent] = useState(true)
    const [userRegisteredEvents, setUserRegisteredEvents] = useState<any>([])
    const [currentEventData, setCurrentEventData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentEventData(tempData)
        //setUserRegisteredEvents(tempData)
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.eventType}>
                    <View style={styles.hostedEvent} >
                        <Text style={styles.titleText}>Your Hosted Events</Text>
                        <Link href="/addEvent" asChild>
                            <Pressable>
                                <MaterialCommunityIcons name="plus-circle" size={28} color="white" />
                            </Pressable>
                        </Link>
                    </View>

                    {/* No Hosted Events */}
                    {userRegisteredEvents.length == 0 && (
                        <View style={styles.noEvents}>
                            <Text >Not Hosting Any Events</Text>
                            <Pressable>
                                <View style={styles.button}>
                                    <Text style={styles.textWhite}>Host Events</Text>
                                </View>
                            </Pressable>
                        </View>)}

                    {userRegisteredEvents.length != 0 && (
                        <FlatList
                            style={styles.flatListStyle}
                            data={userRegisteredEvents}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                //Last Item Redirect
                                if (index == currentEventData.length - 1) {
                                    return (
                                        <View style={styles.flatListItemLastContainer}>
                                            <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                            <Text style={styles.textWhite}>View More</Text>
                                        </View>
                                    )
                                }
                                //Render Regular Items
                                else {
                                    return (
                                        <View style={styles.flatListItemContainer}>
                                            <Image style={styles.flatListItemImage} source={require('../../assets/images/Pickle.png')} />
                                            <View style={styles.flatListItemTextContainer}>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallGreyText}>Autddddddddddddddddddddddddddddddddddddddddadsahor</Text>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallWhiteText}>Titdwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwle</Text>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallGreyText}>Publish:Date, Timewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
                                            </View>
                                        </View>
                                    )
                                }
                            }}
                        />
                    )}
                </View>

                <View style={styles.eventType}>
                    <Text style={styles.titleText}>Registered Events</Text>

                    {/* No Registered Events */}
                    {userRegisteredEvents.length == 0 && (
                        <View style={styles.noEvents}>
                            <Text >No Registered Events</Text>
                            <Pressable>
                                <View style={styles.button}>
                                    <Text style={styles.textWhite}>Find Events</Text>
                                </View>
                            </Pressable>
                        </View>)}

                    {userRegisteredEvents.length != 0 && (
                        <FlatList
                            style={styles.flatListStyle}
                            data={userRegisteredEvents}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                //Last Item Redirect
                                if (index == currentEventData.length - 1) {
                                    return (
                                        <View style={styles.flatListItemLastContainer}>
                                            <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                            <Text style={styles.textWhite}>View More</Text>
                                        </View>
                                    )
                                }
                                //Render Regular Items
                                else {
                                    return (
                                        <View style={styles.flatListItemContainer}>
                                            <Image style={styles.flatListItemImage} source={require('../../assets/images/Pickle.png')} />
                                            <View style={styles.flatListItemTextContainer}>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallGreyText}>Autddddddddddddddddddddddddddddddddddddddddadsahor</Text>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallWhiteText}>Titdwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwle</Text>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallGreyText}>Publish:Date, Timewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
                                            </View>
                                        </View>
                                    )
                                }
                            }}
                        />
                    )}
                    

                </View>

                <View style={styles.eventType}>
                    <Text style={styles.titleText}>Event History</Text>

                    {/* Event History */}
                    {userRegisteredEvents.length == 0 && (
                        <View style={styles.noEvents}>
                            <Text >No Event History</Text>
                        </View>)}

                        {userRegisteredEvents.length != 0 && (
                        <FlatList
                            style={styles.flatListStyle}
                            data={userRegisteredEvents}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                //Last Item Redirect
                                if (index == currentEventData.length - 1) {
                                    return (
                                        <View style={styles.flatListItemLastContainer}>
                                            <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                            <Text style={styles.textWhite}>View More</Text>
                                        </View>
                                    )
                                }
                                //Render Regular Items
                                else {
                                    return (
                                        <View style={styles.flatListItemContainer}>
                                            <Image style={styles.flatListItemImage} source={require('../../assets/images/Pickle.png')} />
                                            <View style={styles.flatListItemTextContainer}>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallGreyText}>Autddddddddddddddddddddddddddddddddddddddddadsahor</Text>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallWhiteText}>Titdwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwle</Text>
                                                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.smallGreyText}>Publish:Date, Timewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
                                            </View>
                                        </View>
                                    )
                                }
                            }}
                        />
                    )}

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        gap: 17,
        paddingTop: 11,
        paddingBottom: 21,
    },
    eventType: {
        display: 'flex',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: ThemeColors['atu-gold-vl'],
        marginBottom: 20,
    },
    hostedEvent: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       paddingLeft: 16,
       paddingRight: 11,
    },
    titleText: {
       fontSize: 20,
       lineHeight: 27,
       fontWeight: 'bold',
       color: 'white',
       paddingLeft: 10,
     },
    noEvents: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '66%',
        padding: 22,
        marginTop: 11,
        marginBottom: 21,
        backgroundColor: 'white',
        borderRadius: 8,

        // object-center
        // w-2/3
        // rounded-md
      },
      button: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: ThemeColors['atu-gold-vd']

        // rounded-full
      },
      textWhite: {
        fontWeight: 'bold',
        color: 'white',
      },
      flatListStyle: {
        paddingVertical: 4
      },
      flatListItemLastContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        backgroundColor: ThemeColors['gray'],
        height: 182,
        width: 112,
      },
      flatListItemContainer: {
        marginLeft: 16,
        backgroundColor: ThemeColors['gray'],
        height: 182,
        width: 112,
      },
      flatListItemImage: {
        backgroundColor: ThemeColors['gray'],
        height: 112,
        aspectRatio: 1 / 1,
      },
      flatListItemTextContainer: {
        height: '100%',
        gap: 4,
        padding: 4,
      },
      smallGreyText: {
        fontSize: 12,
        color: '#e5e7eb',
      },
      smallWhiteText:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
      }

})
