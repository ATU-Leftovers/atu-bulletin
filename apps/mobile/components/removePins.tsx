import { ThemeColors } from '@/constants/Colors';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet, TextInput } from 'react-native';


type propValue = {
    isVisible: boolean;
    close: () => void;
    delete: () => void;
}


export default function RemovePins(props: propValue) {

    return (
        <Modal transparent visible={props.isVisible}>
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitleText}>Want to remove this pin?</Text>
                    <View style={styles.modalActionContainer}>
                        <Pressable onPress={() => { props.close() }} >
                            <View style={{...styles.modalActionStyle, backgroundColor: 'white'}}>
                                <Text style={styles.modalActionText}>Cancel</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => { props.delete() }}>
                            <View style={{...styles.modalActionStyle, backgroundColor: ThemeColors['atu-gold-vd']}}>
                                <Text style={{...styles.modalActionText, color: 'white'}}>Confirm</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: 
    {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    modalContainer:
    {
        width: '75%',
        padding: 8,
        backgroundColor: 'white',
        borderWidth: 8,
        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
        borderColor: ThemeColors['atu-gold-vd'],
        borderRadius: 16
    },
    modalTitleText:
    {
        marginHorizontal: 20,
        marginTop: 16,
        marginBottom: 40,
        fontSize: 24,
        fontWeight: 700,
        textAlign: 'center'
    },
    modalActionContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalActionStyle:
    {
        paddingVertical: 4,
        paddingHorizontal: 16,
        borderWidth: 4,
        borderRadius: 999,
        borderColor: ThemeColors['atu-gold-vd']
    },
    modalActionText:
    {
        fontSize: 18,
        fontWeight: 600
    }
})