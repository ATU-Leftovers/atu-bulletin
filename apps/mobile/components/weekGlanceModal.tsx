import { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, FlatList, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

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
            <Pressable onPress={() => { props.close() }} className='justify-end flex-1 bg-gray-100/75'>
                <TouchableWithoutFeedback>
                    {/* Modal Header */}
                    <View className=' bg-atu-green-vl h-3/4'>
                        <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='justify-center mb-3 bg-atu-green-headerl'>
                            <Text className='text-3xl text-center text-white'>Week at a Glance</Text>
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>

                            {/* Monday Header */}
                            <Pressable className='mt-4' onPress={() => { if (mondayDrop == false) { setMondayDrop(true) } else { setMondayDrop(false) } }}>
                                <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='flex-row justify-between px-3 py-1 mx-3 rounded-md align-center bg-atu-green-headerl'>
                                    <Text className='text-2xl font-bold text-center text-white justify-self-stretch'>Monday</Text>
                                    {!mondayDrop && (
                                        <Entypo name="chevron-down" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                    {mondayDrop && (
                                        <Entypo name="chevron-up" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                </View>
                            </Pressable>
                            {/* Monday Drop */}
                            {mondayDrop && (
                                <View className='mx-4 mb-3 bg-white rounded-b-md'>
                                    {currentNewsData.map((item: any, index: any) => {
                                        return (
                                            <Pressable key={index} style={{ boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)' }} className="flex flex-row h-48 m-4 rounded-md bg-atu-green-vl">
                                                <View><Image className="h-full bg-gray-600 rounded-l-md aspect-square" source={require('../assets/images/Pickle.png')} /></View>
                                                <View className="justify-between pt-1 pl-2">
                                                    <View>
                                                        <Text numberOfLines={1} ellipsizeMode='tail' className="absolute top-0 w-full text-lg font-bold text-white align-top">Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                                        <Text numberOfLines={7} ellipsizeMode='tail' className='absolute w-full text-white top-7'>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
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
                                </View>
                            )}

                            {/* Tuesday Header */}
                            <Pressable className='mt-4' onPress={() => { if (tuesdayDrop == false) { setTuesdayDrop(true) } else { setTuesdayDrop(false) } }}>
                                <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='flex-row justify-between px-3 py-1 mx-3 rounded-md align-center bg-atu-green-headerl'>
                                    <Text className='text-2xl font-bold text-center text-white justify-self-stretch'>Tuesday</Text>
                                    {!tuesdayDrop && (
                                        <Entypo name="chevron-down" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                    {tuesdayDrop && (
                                        <Entypo name="chevron-up" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                </View>
                            </Pressable>
                            {/* Tuesday Drop */}
                            {tuesdayDrop && (
                                <View className='mx-4 mb-3 bg-white rounded-b-md'>
                                    {currentNewsData.map((item: any, index: any) => {
                                        return (
                                            <Pressable key={index} style={{ boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)' }} className="flex flex-row h-48 m-4 rounded-md bg-atu-green-vl">
                                                <View><Image className="h-full bg-gray-600 rounded-l-md aspect-square" source={require('../assets/images/Pickle.png')} /></View>
                                                <View className="justify-between pt-1 pl-2">
                                                    <View>
                                                        <Text numberOfLines={1} ellipsizeMode='tail' className="absolute top-0 w-full text-lg font-bold text-white align-top">Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                                        <Text numberOfLines={7} ellipsizeMode='tail' className='absolute w-full text-white top-7'>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
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
                                </View>
                            )}

                            {/* Wednesday Header */}
                            <Pressable className='mt-4' onPress={() => { if (wednesdayDrop == false) { setWednesdayDrop(true) } else { setWednesdayDrop(false) } }}>
                                <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='flex-row justify-between px-3 py-1 mx-3 rounded-md align-center bg-atu-green-headerl'>
                                    <Text className='text-2xl font-bold text-center text-white justify-self-stretch'>Wednesday</Text>
                                    {!wednesdayDrop && (
                                        <Entypo name="chevron-down" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                    {wednesdayDrop && (
                                        <Entypo name="chevron-up" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                </View>
                            </Pressable>
                            {/* Wednesday Drop */}
                            {wednesdayDrop && (
                                <View className='mx-4 mb-3 bg-white rounded-b-md'>
                                    {currentNewsData.map((item: any, index: any) => {
                                        return (
                                            <Pressable key={index} style={{ boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)' }} className="flex flex-row h-48 m-4 rounded-md bg-atu-green-vl">
                                                <View><Image className="h-full bg-gray-600 rounded-l-md aspect-square" source={require('../assets/images/Pickle.png')} /></View>
                                                <View className="justify-between pt-1 pl-2">
                                                    <View>
                                                        <Text numberOfLines={1} ellipsizeMode='tail' className="absolute top-0 w-full text-lg font-bold text-white align-top">Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                                        <Text numberOfLines={7} ellipsizeMode='tail' className='absolute w-full text-white top-7'>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
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
                                </View>
                            )}

                            {/* Thursday Header */}
                            <Pressable className='mt-4' onPress={() => { if (thursdayDrop == false) { setThursdayDrop(true) } else { setThursdayDrop(false) } }}>
                                <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='flex-row justify-between px-3 py-1 mx-3 rounded-md align-center bg-atu-green-headerl'>
                                    <Text className='text-2xl font-bold text-center text-white justify-self-stretch'>Thursday</Text>
                                    {!thursdayDrop && (
                                        <Entypo name="chevron-down" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                    {thursdayDrop && (
                                        <Entypo name="chevron-up" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                </View>
                            </Pressable>
                            {/* Thursday Drop */}
                            {thursdayDrop && (
                                <View className='mx-4 mb-3 bg-white rounded-b-md'>
                                    {currentNewsData.map((item: any, index: any) => {
                                        return (
                                            <Pressable key={index} style={{ boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)' }} className="flex flex-row h-48 m-4 rounded-md bg-atu-green-vl">
                                                <View><Image className="h-full bg-gray-600 rounded-l-md aspect-square" source={require('../assets/images/Pickle.png')} /></View>
                                                <View className="justify-between pt-1 pl-2">
                                                    <View>
                                                        <Text numberOfLines={1} ellipsizeMode='tail' className="absolute top-0 w-full text-lg font-bold text-white align-top">Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                                        <Text numberOfLines={7} ellipsizeMode='tail' className='absolute w-full text-white top-7'>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
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
                                </View>
                            )}

                            {/* Friday Header */}
                            <Pressable className='mt-4' onPress={() => { if (fridayDrop == false) { setFridayDrop(true) } else { setFridayDrop(false) } }}>
                                <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='flex-row justify-between px-3 py-1 mx-3 rounded-md align-center bg-atu-green-headerl'>
                                    <Text className='text-2xl font-bold text-center text-white justify-self-stretch'>Friday</Text>
                                    {!fridayDrop && (
                                        <Entypo name="chevron-down" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                    {fridayDrop && (
                                        <Entypo name="chevron-up" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                </View>
                            </Pressable>
                            {/* Friday Drop */}
                            {fridayDrop && (
                                <View className='mx-4 mb-3 bg-white rounded-b-md'>
                                    {currentNewsData.map((item: any, index: any) => {
                                        return (
                                            <Pressable key={index} style={{ boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)' }} className="flex flex-row h-48 m-4 rounded-md bg-atu-green-vl">
                                                <View><Image className="h-full bg-gray-600 rounded-l-md aspect-square" source={require('../assets/images/Pickle.png')} /></View>
                                                <View className="justify-between pt-1 pl-2">
                                                    <View>
                                                        <Text numberOfLines={1} ellipsizeMode='tail' className="absolute top-0 w-full text-lg font-bold text-white align-top">Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                                        <Text numberOfLines={7} ellipsizeMode='tail' className='absolute w-full text-white top-7'>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
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
                                </View>
                            )}

                            {/* Saturday Header */}
                            <Pressable className='mt-4' onPress={() => { if (saturdayDrop == false) { setSaturdayDrop(true) } else { setSaturdayDrop(false) } }}>
                                <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='flex-row justify-between px-3 py-1 mx-3 rounded-md align-center bg-atu-green-headerl'>
                                    <Text className='text-2xl font-bold text-center text-white justify-self-stretch'>Saturday</Text>
                                    {!saturdayDrop && (
                                        <Entypo name="chevron-down" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                    {saturdayDrop && (
                                        <Entypo name="chevron-up" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                </View>
                            </Pressable>
                            {/* Saturday Drop */}
                            {saturdayDrop && (
                                <View className='mx-4 mb-3 bg-white rounded-b-md'>
                                    {currentNewsData.map((item: any, index: any) => {
                                        return (
                                            <Pressable key={index} style={{ boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)' }} className="flex flex-row h-48 m-4 rounded-md bg-atu-green-vl">
                                                <View><Image className="h-full bg-gray-600 rounded-l-md aspect-square" source={require('../assets/images/Pickle.png')} /></View>
                                                <View className="justify-between pt-1 pl-2">
                                                    <View>
                                                        <Text numberOfLines={1} ellipsizeMode='tail' className="absolute top-0 w-full text-lg font-bold text-white align-top">Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                                        <Text numberOfLines={7} ellipsizeMode='tail' className='absolute w-full text-white top-7'>{"\u00A0\u00A0\u00A0\u00A0"} Summary super cool somethign to add to test wrap Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
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
                                </View>
                            )}

                            {/* Sunday Header */}
                            <Pressable className='mt-4' onPress={() => { if (sundayDrop == false) { setSundayDrop(true) } else { setSundayDrop(false) } }}>
                                <View style={{ boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)' }} className='flex-row justify-between px-3 py-1 mx-3 rounded-md align-center bg-atu-green-headerl'>
                                    <Text className='text-2xl font-bold text-center text-white justify-self-stretch'>Sunday</Text>
                                    {!sundayDrop && (
                                        <Entypo name="chevron-down" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                    {sundayDrop && (
                                        <Entypo name="chevron-up" size={32} color="white" style={{ alignSelf: 'center' }} />
                                    )}
                                </View>
                            </Pressable>
                            {/* Sunday Drop */}
                            {sundayDrop && (
                                <View className='mx-4 mb-3 bg-white rounded-b-md'>
                                    {currentNewsData.map((item: any, index: any) => {
                                        return (
                                            <Pressable key={index} style={{ boxShadow: '0 7px 4px rgba(0, 0, 0, 0.2)' }} className="flex flex-row h-48 m-4 rounded-md bg-atu-green-vl">
                                                <View><Image className="h-full bg-gray-600 rounded-l-md aspect-square" source={require('../assets/images/Pickle.png')} /></View>
                                                <View className="justify-between pt-1 pl-2">
                                                    <View>
                                                        <Text numberOfLines={1} ellipsizeMode='tail' className="absolute top-0 w-full text-lg font-bold text-white align-top">Titlewadsadadasdhfuhuhifuijhfdsjhidhjfdjhsdfjhsdhjfdjdks</Text>
                                                        <Text numberOfLines={7} ellipsizeMode='tail' className='absolute w-full text-white top-7'>{"\u00A0\u00A0\u00A0\u00A0"} Summ</Text>
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
                                </View>
                            )}


                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Pressable >
        </Modal>
    )
}