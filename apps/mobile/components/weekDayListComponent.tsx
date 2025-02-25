import { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, TouchableWithoutFeedback, ScrollView, Image, StyleSheet, useColorScheme } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemeColors } from '@/constants/Colors';

type propValue =
    {
        data: []
        day: string;
    }

export default function WeekDayListComponent(props: propValue) {
    let colorScheme = useColorScheme();
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
        <View style={{...styles.weekdayDropDownHeader, backgroundColor: ThemeColors(colorScheme)['atu-green-headerl']}}>
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
        <View style={{...styles.weekdayDropDownContainer, backgroundColor: ThemeColors(colorScheme)['theme']}}>
            {currentDayData.map((item: any, index: any) => {
                return (
                    <Pressable key={index} style={{...styles.weekdayDropDownItemContainer, backgroundColor: ThemeColors(colorScheme)['atu-green-vl']}}>
                        <View><Image style={styles.weekdayDropDownItemImage} source={require('../assets/images/Pickle.png')} /></View>
                        <View style={styles.weekdayDropDownItemInfoContainer}>
                            <View>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={{...styles.weekdayDropDownItemTitle, color: ThemeColors(colorScheme)['DBlackLWhite']}}>Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                <Text numberOfLines={7} ellipsizeMode='tail' style={{...styles.weekdayDropDownItemText, color: ThemeColors(colorScheme)['DBlackLWhite']}}>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                            </View>
                            <Pressable style={styles.weekdayDropDownItemButtonContainer}>
                                <View style={{...styles.weekdayDropDownItemButton, backgroundColor: ThemeColors(colorScheme)['atu-gold-vd']}}>
                                    <Text style={{...styles.weekdayDropDownItemButtonText, color: ThemeColors(colorScheme)['DBlackLWhite']}}>Learn More</Text>
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
        borderBottomEndRadius: 8
    },
    weekdayDropDownItemContainer:
    {
        boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)',
        flexDirection: 'row',
        height: 192,
        margin: 16,
        borderRadius: 8
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
        verticalAlign: 'top'
    },
    weekdayDropDownItemText:
    {
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
    },
    weekdayDropDownItemButtonText:
    {
        fontSize: 16,
        fontWeight: 700,
       
    }
    
})