import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { Appearance, useColorScheme } from 'react-native';

export default function RootLayout() {
  async function getTheme() {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme == 'dark') {
        console.log('testD')
        Appearance.setColorScheme('dark')
        return ('dark')
        
      }
      else {
        console.log('testL')
        return ('light')
      }
    }
    catch (error) {
      console.log('testFAukl')
      // console.log('Error loading theme:', error);
      return ('light')
    }
  }
  getTheme()

  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#4b7f52',

      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(foundAround)/search" options={{ title: "Search" }} />
      <Stack.Screen name="(foundAround)/map" options={{ title: "Map" }} />
      <Stack.Screen name="(foundAround)/eventDetail" options={{ title: "Event Detail" }} />
      <Stack.Screen name="(foundAround)/newsDetail" options={{ title: "News Detail" }} />
      <Stack.Screen name="(foundAround)/addEvent" options={{ title: "Add Event" }} />
      <Stack.Screen name="(foundAround)/addNews" options={{ title: "Add News" }} />
      <Stack.Screen name="(profile)/yourEvents" options={{ title: "Your Events" }} />
      <Stack.Screen name="(profile)/pins" options={{ title: "Your Pins" }} />
      <Stack.Screen name="(profile)/settings" options={{ title: "Your Settings" }} />
      <Stack.Screen name="(profile)/defaultProfile" options={{ title: "User name" }} />
      <Stack.Screen name="(profile)/(nondefault)/yourNews" options={{ title: "Your News" }} />
      <Stack.Screen name="(profile)/(nondefault)/[id]" options={{ title: "Profile name" }} />
    </Stack>

  )
}
