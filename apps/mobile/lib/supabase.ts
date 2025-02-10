import 'react-native-url-polyfill/auto'
import { AppState } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from "@the-leftovers/supabase"
import { router } from 'expo-router'

export const supabase = createClient({
    URL: process.env.EXPO_PUBLIC_SUPABASE_URL!,
    AnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})

supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT') {
        router.replace('/(auth)/login')
    } else if (session) {
        router.replace('/(tabs)/home')
    }
})