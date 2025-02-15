import { SafeAreaView } from "react-native-safe-area-context"
import { Switch, Text, View, Pressable } from "react-native";
import { useState } from "react";
import React from "react";


export default function Settings() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isDefault, setIsDefault] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <SafeAreaView className="justify-center justify-items-center">
            <Text className="ml-6 text-1xl">Preferences</Text>
            <View className='flex-row justify-between py-2 mx-6 border-b-4 border-gray-400'>
                <View className="justify-center align-middle">
                    <Text className="ml-3 text-2xl">Theme</Text>
                    <Switch
                        trackColor={{ false: '#ddbf5f', true: '#4b7f52' }}
                        thumbColor={isEnabled ? '#78797b' : '#78797b'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <Text className="ml-6 text-1xl">Accessibility</Text>
            <View className='flex-row justify-between py-2 mx-6 border-b-4 border-gray-400'>
                <View className="justify-center align-middle">
                    <Text className="ml-3 text-2xl">Font Size</Text>
                    <Pressable>
                        <View className="px-2 py-1 mt-2 bg-atu-gold-vd">
                            <Text className="font-bold text-white">v 1x</Text>
                        </View>
                    </Pressable>
                    <Text className="ml-3 text-2xl">Language</Text>
                    <Pressable>
                        <View className="px-2 py-1 mt-2 bg-atu-gold-vd">
                            <Text className="font-bold text-white">English</Text>
                        </View>
                    </Pressable>

                </View>
            </View>
            {!isDefault && (
                <>
                    <Text className="ml-6 text-1xl">Profile</Text>
                    <View className='flex-row justify-between py-2 mx-6 border-b-4 border-gray-400'>
                        <View className="justify-center align-middle">
                            <Text className="ml-3 text-2xl">Name: Username</Text>
                            <Pressable>
                                <View className="px-2 py-1 mt-2 rounded-full bg-atu-gold-vd">
                                    <Text className="font-bold text-white">Change</Text>
                                </View>
                            </Pressable>
                            <Text className="ml-3 text-2xl">Banner Image</Text>
                            <Pressable>
                                <View className="px-2 py-1 mt-2 rounded-full bg-atu-gold-vd">
                                    <Text className="font-bold text-white">Change</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </>
            )}
        </SafeAreaView>
    )
}
