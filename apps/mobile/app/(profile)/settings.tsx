import { SafeAreaView } from "react-native-safe-area-context"
import { Switch, Text, View, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { ThemeColors } from "@/constants/Colors";
import { Appearance, useColorScheme } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Settings() {
    let colorScheme = useColorScheme();
    const [isDefault, setIsDefault] = useState(false);
    const [theme, setTheme] = useState<boolean>(themeFinder())
    const toggleSwitch = () => {updateTheme()}

    function  themeFinder()
    {
        if(colorScheme == 'dark')
            {
                return true
            }
            else{
                return false
            }
    }
    async function updateTheme()
    {
        setTheme(previousState => !previousState);
        
        if(Appearance.getColorScheme() == 'dark')
        {
            try{
                 await AsyncStorage.setItem('theme', 'light');
            }
            catch{
                console.log('Failed to set theme storage')
            }
           
            Appearance.setColorScheme('light')
   
        }
        else{
            try{
                await AsyncStorage.setItem('theme', 'dark');
           }
           catch{
               console.log('Failed to set theme storage')
           }
            Appearance.setColorScheme('dark')
            
        }
    }


    return (
        <SafeAreaView style={{...styles.container, backgroundColor: ThemeColors(colorScheme)['theme']}}>
            <Text style={{...styles.headerText, color: ThemeColors(colorScheme)['DWhiteLBlack']}}>Preferences</Text>
            <View style={{...styles.infoContainer, borderColor: ThemeColors(colorScheme)['gray-placeholder']}}>
                <View style={styles.infoRowContainer}>
                    <Text style={{...styles.infoText, color: ThemeColors(colorScheme)['DWhiteLBlack']}}>Theme</Text>
                    <Switch
                        trackColor={{ false: '#ddbf5f', true: '#4b7f52' }}
                        thumbColor={theme ? '#78797b' : '#78797b'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={theme}
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
                    <Text style={{...styles.headerText, color: ThemeColors(colorScheme)['DWhiteLBlack']}}>Profile</Text>
                    <View style={{...styles.infoContainer, borderColor: ThemeColors(colorScheme)['gray-placeholder']}}>
                        <View  style={styles.infoRowContainer}>
                            <Text style={{...styles.infoText, color: ThemeColors(colorScheme)['DWhiteLBlack']}}>Name: Username</Text>
                            <Pressable>
                                <View style={{...styles.changeButtonStyle, backgroundColor: ThemeColors(colorScheme)['atu-gold-vd']}}>
                                    <Text style={{...styles.changeButtonText, color: ThemeColors(colorScheme)['DBlackLWhite']}}>Change</Text>
                                </View>
                            </Pressable>
                        </View>
                        <View  style={styles.infoRowContainer}>
                            <Text style={{...styles.infoText, color: ThemeColors(colorScheme)['DWhiteLBlack']}}>Banner Image</Text>
                            <Pressable>
                                <View style={{...styles.changeButtonStyle, backgroundColor: ThemeColors(colorScheme)['atu-gold-vd']}}>
                                    <Text style={{...styles.changeButtonText, color: ThemeColors(colorScheme)['DBlackLWhite']}}>Change</Text>
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
        padding: 34,
        height: '100%'
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
    },
    changeButtonText:
    {
        fontWeight: 700,
        color: 'white',
        textAlign: 'center'
    }

})
