import { SafeAreaView } from "react-native-safe-area-context"
import { Switch, Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";
import { ThemeColors } from "@/constants/Colors";


export default function Settings() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isDefault, setIsDefault] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Preferences</Text>
            <View style={styles.infoContainer}>
                <View style={styles.infoRowContainer}>
                    <Text style={styles.infoText}>Theme</Text>
                    <Switch
                        trackColor={{ false: '#ddbf5f', true: '#4b7f52' }}
                        thumbColor={isEnabled ? '#78797b' : '#78797b'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            {/* <Text style={styles.headerText}>Accessibility</Text>
            <View style={styles.infoContainer}>
                <View className="justify-center align-middle">
                    <Text style={styles.infoText}>Font Size</Text>
                    <Pressable>
                        <View className="px-2 py-1 mt-2 bg-atu-gold-vd">
                            <Text className="font-bold text-white">v 1x</Text>
                        </View>
                    </Pressable>
                    <Text style={styles.infoText}>Language</Text>
                    <Pressable>
                        <View className="px-2 py-1 mt-2 bg-atu-gold-vd">
                            <Text className="font-bold text-white">English</Text>
                        </View>
                    </Pressable>

                </View>
            </View> */}
            {!isDefault && (
                <>
                    <Text style={styles.headerText}>Profile</Text>
                    <View style={styles.infoContainer}>
                        <View  style={styles.infoRowContainer}>
                            <Text style={styles.infoText}>Name: Username</Text>
                            <Pressable>
                                <View style={styles.changeButtonStyle}>
                                    <Text style={styles.changeButtonText}>Change</Text>
                                </View>
                            </Pressable>
                        </View>
                        <View  style={styles.infoRowContainer}>
                            <Text style={styles.infoText}>Banner Image</Text>
                            <Pressable>
                                <View style={styles.changeButtonStyle}>
                                    <Text style={styles.changeButtonText}>Change</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </>
            )}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:
    {
        justifyContent: 'center',
        padding: 34
    },
    headerText:
    {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 600
    },
    infoContainer:
    {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 20,
        borderBottomWidth: 4,
        borderColor: ThemeColors['gray-placeholder'],
        gap: 15,
    },
    infoText:
    {
        fontSize: 18
    },
    infoRowContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    changeButtonStyle:
    {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 999,
        backgroundColor: ThemeColors['atu-gold-vd']
    },
    changeButtonText:
    {
        fontWeight: 700,
        color: 'white',
        textAlign: 'center'
    }

})
