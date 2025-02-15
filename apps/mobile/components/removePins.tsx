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
            <View className="items-center justify-center flex-1 bg-gray-100/50">
                <View className="w-3/4 p-2 bg-white border-8 shadow-2xl rounded-2xl shadow-black border-atu-gold-vd">
                    <Text className='mx-5 mt-4 mb-10 text-2xl font-bold text-center'>Want to remove this pin?</Text>
                    <View className='flex-row justify-between'>
                        <Pressable onPress={() => { props.close() }} >
                            <View className='px-4 py-1 bg-white border-4 rounded-full border-atu-gold-vd'>
                                <Text className='text-lg font-semibold'>Cancel</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => { props.delete() }}>
                            <View className='px-4 py-1 border-4 rounded-full bg-atu-gold-vd border-atu-gold-vd'>
                                <Text className='text-lg font-semibold text-white'>Confirm</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
