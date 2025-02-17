import { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, TouchableWithoutFeedback, ScrollView, Image, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemeColors } from '@/constants/Colors';

type propValue =
    {
        data: []
        day: string;
    }

export default function WeekDayListComponent(props: propValue) {
    const [currentDayData, setCurrentDayData] = useState<any>([])
    const [dayDrop, setDayDrop] = useState(false)


    useEffect(() => {
        // const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentDayData(props.data)

    }, [])


    return (
        <>
        {/* Day Header */}
        <Pressable style={styles.weekdayDropDownPressable} onPress={() => { if (dayDrop == false) { setDayDrop(true) } else { setDayDrop(false) } }}>
        <View style={styles.weekdayDropDownHeader}>
            <Text style={styles.weekdayDropDownText}>{props.day}</Text>
            {!dayDrop && (
                <Entypo name="chevron-down" size={32} color="white" style={{ alignSelf: 'center' }} />
            )}
            {dayDrop && (
                <Entypo name="chevron-up" size={32} color="white" style={{ alignSelf: 'center' }} />
            )}
        </View>
    </Pressable>
    {/* Day Drop */}
    {dayDrop && (
        <View style={styles.weekdayDropDownContainer}>
            {currentDayData.map((item: any, index: any) => {
                return (
                    <Pressable key={index} style={styles.weekdayDropDownItemContainer}>
                        <View><Image style={styles.weekdayDropDownItemImage} source={require('../assets/images/Pickle.png')} /></View>
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
        </View>
    )}
    </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end'
    },
    modalContainer:
    {
        backgroundColor: ThemeColors['atu-green-vl'],
        height: '75%',
    },

    modalHeaderContainer:
    {
        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        marginBottom: 12,
        backgroundColor: ThemeColors['atu-green-headerl']
    },
    modalHeaderText:
    {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },

    weekdayDropDownPressable:
    {
        marginTop: 16
    },
    weekdayDropDownHeader:
    {
        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginHorizontal: 12,
        borderRadius: 8,
        alignContent: 'center',
        backgroundColor: ThemeColors['atu-green-headerl']
    },
    weekdayDropDownText:
    {
        color: 'white',
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center',
        
    },
    weekdayDropDownContainer:
    {
        marginHorizontal: 16,
        marginBottom:12,
        backgroundColor: 'white',
        borderBottomEndRadius: 8
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
        aspectRatio: 1/1,
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