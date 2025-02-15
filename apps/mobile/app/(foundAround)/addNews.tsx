import { SafeAreaView } from "react-native-safe-area-context"
import { Text, Pressable, View, ScrollView, TextInput } from "react-native";

export default function AddNews() {

    return (
        <SafeAreaView >
            <ScrollView className="flex">

                <View className="p-2 mx-1">
                    <Text className="mb-1 font-bold">News Title</Text>
                    <TextInput className="p-2 mb-2 bg-white border-2 rounded-full border-atu-gold"></TextInput>
                </View>
                
                <View className="p-2 mx-1">
                    <Text className="mb-1 font-bold">Author</Text>
                        <TextInput className="p-2 mb-2 bg-white border-2 rounded-full border-atu-gold"></TextInput>
                </View>
                
                <View className="p-2 mx-1">
                    <Text className="mb-1 font-bold">Publish Date</Text>
                    <TextInput className="p-2 mb-2 bg-white border-2 rounded-full border-atu-gold"></TextInput>
                </View>
                
                <View className="p-2 mx-1">
                    <Text className="mb-1 font-bold">Summary</Text>
                    <TextInput className="p-2 mb-2 bg-white border-2 rounded-full border-atu-gold"></TextInput>
                </View>
                
                <View className="p-2 mx-1">
                    <Text className="mb-1 font-bold">Cover Image</Text>
                    <TextInput className="p-2 py-10 mb-2 bg-white border-2 rounded-md border-atu-gold"></TextInput>
                </View>
                
                <Pressable className='flex items-center'>
                    <View className="px-5 py-1 mt-3 mb-5 rounded-full bg-atu-gold-vd">
                        <Text className="text-lg font-bold text-white">Add News</Text>
                    </View>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    )
}