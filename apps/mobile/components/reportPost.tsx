import { Modal, View, Text, Pressable, TextInput} from "react-native";

type propValue = {
    isVisible: boolean;
    close: () => void;
    delete: () => void;
}

export default function ReportPost(props: propValue) {

    return (
        <Modal transparent visible={props.isVisible}>
            <View className="items-center justify-center flex-1">
                <View className="p-3 bg-white border-4 border-red-500 rounded-lg shadow-md shadow-black">
                    <Text className="p-1 mx-5 mb-1 text-3xl font-bold text-center text-white bg-red-500 rounded-lg">Report</Text>
                    <Text className="mt-2">Describe the issue(s) with the post.</Text>
                    <View className="p-2 m-2">
                        <TextInput className="p-2 pb-20 mb-2 bg-white border-2 border-red-500 rounded-md"></TextInput>
                    </View>
                    <View className="flex-row justify-between">
                        <Pressable onPress={() => { props.close() }} >
                            <View className="px-4 py-1 mx-4 bg-white border-4 border-red-500 rounded-full">
                                <Text className="text-lg font-bold text-red-500">Cancel</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => { props.delete() }}>
                            <View className="px-4 py-1 mx-4 bg-red-500 border-4 border-red-500 rounded-full">
                                <Text className="text-lg font-bold text-white">Submit</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}