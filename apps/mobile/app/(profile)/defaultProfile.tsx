import { ThemeColors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View, Text, Image, ScrollView, Pressable, StyleSheet } from "react-native";


export default function DefaultProfile() {
    const [currentNewsData, setCurrentNewsData] = useState<any>([])


    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentNewsData(tempData)

    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {currentNewsData.map((item: any, index: any) => {
                    return (
                        <Pressable key={index} style={styles.weekdayDropDownItemContainer}>
                            <View><Image style={styles.weekdayDropDownItemImage} source={require('../../assets/images/Pickle.png')} /></View>
                            <View style={styles.weekdayDropDownItemInfoContainer}>
                                <View>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.weekdayDropDownItemTitle}>Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                    <Text numberOfLines={7} ellipsizeMode='tail' style={styles.weekdayDropDownItemText}>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                </View>
                                <Pressable style={styles.weekdayDropDownItemButtonContainer}>
                                    <View style={styles.weekdayDropDownItemButton}>
                                        <Text style={styles.weekdayDropDownItemButtonText}>Learn More</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </Pressable>
                    )
                })}

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        verticalAlign: 'middle'
    },
    weekdayDropDownItemContainer:
    {
        boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        height: 192,
        margin: 16,
        borderRadius: 8,
        backgroundColor: ThemeColors['atu-green-vl']
    },
    weekdayDropDownItemImage:
    {
        height: '100%',
        aspectRatio: 1 / 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    weekdayDropDownItemInfoContainer:
    {
        justifyContent: 'space-between',
        paddingTop: 4,
        paddingLeft: 8
    },
    weekdayDropDownItemTitle:
    {
        position: 'absolute',
        top: 0,
        width: '100%',
        fontSize: 18,
        fontWeight: 700,
        color: 'white',
        verticalAlign: 'top'
    },
    weekdayDropDownItemText:
    {
        color: 'white',
        position: 'absolute',
        top: 20,
        width: '100%',
    },

    weekdayDropDownItemButtonContainer:
    {
        alignItems: 'flex-end',
        paddingHorizontal: 8,
        paddingBottom: 8
    },
    weekdayDropDownItemButton:
    {
        bottom: 0,
        paddingHorizontal: 20,
        borderRadius: 999,
        backgroundColor: ThemeColors['atu-gold-vd']
    },
    weekdayDropDownItemButtonText:
    {
        fontSize: 16,
        fontWeight: 700,
        color: 'white'
    }

})
