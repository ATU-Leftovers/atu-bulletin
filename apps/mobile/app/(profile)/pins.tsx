import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, ScrollView, Text, View, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import RemovePins from "@/components/removePins";

export default function Pins() {
    const [currentNewsData, setCurrentNewsData] = useState<any>([])
    const [removePinModal, setRemovePinModal] = useState(false)


    useEffect(() => {
        const tempData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 13 }, { id: 23 }, { id: 33 }, { id: 43 }, { id: 53 }, { id: 63 }, { id: 12 }, { id: 22 }, { id: 32 }, { id: 42 }, { id: 52 }, { id: 62 }, { id: 72 }, { id: 82 }, { id: 92 },]
        setCurrentNewsData(tempData)

    }, [])

    return (
        <SafeAreaView className="justify-center justify-items-center">
            <FlatList
                data={currentNewsData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index} className='flex-row justify-between py-2 mx-6 border-b-4 border-gray-400'>
                            <View className="justify-center align-middle">
                                <Text className="ml-3 text-2xl">Department Name</Text>
                            </View>
                            <Pressable onPress={() =>{setRemovePinModal(true)}}>
                                <MaterialCommunityIcons name="delete-circle-outline" size={48} color="#A52A2A" />
                            </Pressable>
                        </View>
                    )
                }}
            />
            <RemovePins isVisible={removePinModal} close={() => { setRemovePinModal(false) }} delete={() => { }} />
        </SafeAreaView>
    )
}