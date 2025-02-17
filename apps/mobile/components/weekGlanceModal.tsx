import { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, TouchableWithoutFeedback, ScrollView, Image, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { ThemeColors } from '@/constants/Colors';
import WeekDayListComponent from './weekDayListComponent';

type propValue =
    {
        isVisible: boolean;
        close: () => void;
    }

export default function WeekGlanceModal(props: propValue) {
    const [currentNewsData, setCurrentNewsData] = useState<any>([])
    const [mondayDrop, setMondayDrop] = useState(false)
    const [tuesdayDrop, setTuesdayDrop] = useState(false)
    const [wednesdayDrop, setWednesdayDrop] = useState(false)
    const [thursdayDrop, setThursdayDrop] = useState(false)
    const [fridayDrop, setFridayDrop] = useState(false)
    const [saturdayDrop, setSaturdayDrop] = useState(false)
    const [sundayDrop, setSundayDrop] = useState(false)

    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentNewsData(tempData)

    }, [])


    return (
        <Modal transparent visible={props.isVisible}>
            <Pressable onPress={() => { props.close() }} style={styles.container}>
                <TouchableWithoutFeedback>
                    {/* Modal Header */}
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeaderContainer}>
                            <Text style={styles.modalHeaderText}>Week at a Glance</Text>
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>

                            <WeekDayListComponent day='Monday' data={currentNewsData}/>
                            <WeekDayListComponent day='Tuesday' data={currentNewsData}/>
                            <WeekDayListComponent day='Wednesday' data={currentNewsData}/>
                            <WeekDayListComponent day='Thursday' data={currentNewsData}/>
                            <WeekDayListComponent day='Friday' data={currentNewsData}/>
                            <WeekDayListComponent day='Saturday' data={currentNewsData}/>
                            <WeekDayListComponent day='Sunday' data={currentNewsData}/>

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
})