import { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, TouchableWithoutFeedback, ScrollView, Image, StyleSheet, useColorScheme } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemeColors } from '@/constants/Colors';
import WeekDayListComponent from './weekDayListComponent';

type propValue =
    {
        isVisible: boolean;
        close: () => void;
    }

export default function WeekGlanceModal(props: propValue) {
    let colorScheme = useColorScheme();
    const [currentNewsData, setCurrentNewsData] = useState<any>([])

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentNewsData(tempData)

    }, [])


    return (
        <Modal transparent visible={props.isVisible}>
            <Pressable onPress={() => { props.close() }} style={styles.container}>
                <View style={{...styles.modalTransparentSpace, backgroundColor: ThemeColors(colorScheme)['gray']}}></View>
                <TouchableWithoutFeedback>
                    {/* Modal Header */}
                    <View style={{...styles.modalContainer, backgroundColor: ThemeColors(colorScheme)['atu-green-vl']}}>
                        <View style={{...styles.modalHeaderContainer, backgroundColor: ThemeColors(colorScheme)['atu-green-headerl']}}>
                            <Text style={styles.modalHeaderText}>Week at a Glance</Text>
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>

                            <WeekDayListComponent day='Monday' data={currentNewsData} />
                            <WeekDayListComponent day='Tuesday' data={currentNewsData} />
                            <WeekDayListComponent day='Wednesday' data={currentNewsData} />
                            <WeekDayListComponent day='Thursday' data={currentNewsData} />
                            <WeekDayListComponent day='Friday' data={currentNewsData} />
                            <WeekDayListComponent day='Saturday' data={currentNewsData} />
                            <WeekDayListComponent day='Sunday' data={currentNewsData} />

                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Pressable >
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    modalTransparentSpace:
    {
        opacity: .60,
        height: '100%'
    },
    modalContainer:
    {
        height: '75%',
    },

    modalHeaderContainer:
    {
        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        marginBottom: 12,
    },
    modalHeaderText:
    {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
})