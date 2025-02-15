import { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Image } from 'react-native';

type propValue =
    {
        isVisible: boolean;
        close: () => void;
        title: string;
    }

export default function GenericListModal(props: propValue) {
    const [currentNewsData, setCurrentNewsData] = useState<any>([])


    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
        setCurrentNewsData(tempData)

    }, [])

    return (
        <Modal transparent visible={props.isVisible}>
            <Pressable onPress={() => { props.close() }} className='justify-end flex-1 bg-gray-100/75'>
                <TouchableWithoutFeedback>
                    <View className=' bg-atu-green-vl h-3/4'>
                        <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='justify-center bg-atu-green-headerl'>
                            <Text className='text-3xl text-center text-white'>{props.title}</Text>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {currentNewsData.map((item: any, index: any) => {
                                return (
                                    <Pressable key={index} style={{ boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)' }} className="flex flex-row h-48 m-4 bg-white rounded-md">
                                        <View><Image className="h-full bg-gray-600 rounded-l-md aspect-square" source={require('../assets/images/Pickle.png')} /></View>
                                        <View className="justify-between pt-1 pl-2">
                                            <View>
                                                <Text numberOfLines={1} ellipsizeMode='tail' className="absolute top-0 w-full text-lg font-bold text-black align-top">Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                                <Text numberOfLines={7} ellipsizeMode='tail' className='absolute w-full text-black top-7'>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                            </View>
                                            <Pressable className='items-end px-2 pb-2'>
                                                <View className="bottom-0 px-5 rounded-full bg-atu-gold-vd">
                                                    <Text className="text-base font-bold text-white">Learn More</Text>
                                                </View>
                                            </Pressable>
                                        </View>
                                    </Pressable>
                                )
                            })}

                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Pressable >
        </Modal>
    )
}