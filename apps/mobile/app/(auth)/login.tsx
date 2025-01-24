import { View, Text } from "react-native"
import { OAuthButtons } from "@/components/oauth-buttons"
import { Stack } from "expo-router"
import { supabase } from '@/lib/supabase';
import * as WebBrowser from 'expo-web-browser'
import { makeRedirectUri } from 'expo-auth-session'
import 'react-native-url-polyfill/auto'
import * as QueryParams from 'expo-auth-session/build/QueryParams'
import { Provider } from "@supabase/supabase-js";

export default function LoginScreen() {
    const redirectTo = makeRedirectUri()

    async function signInWithProvider(provider: Provider) {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: provider,
            options: {
                redirectTo,
                skipBrowserRedirect: true
            }
        })
        if (error) throw error
    
        const res = await WebBrowser.openAuthSessionAsync(data?.url ?? '', redirectTo)
    
        if (res.type === 'success') {
            const { url } = res
            await createSessionFromUrl(url)
        }
    }

    async function createSessionFromUrl(url: string) {
        const { params, errorCode } = QueryParams.getQueryParams(url)
    
        if (errorCode) throw new Error(errorCode)
        const { access_token, refresh_token } = params
    
        if (!access_token) return
    
        const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token
        })
    
        if (error) throw error
        
        return data.session
    }
    
    return (
        <View>
            <Stack.Screen options={{headerShown: true, title: "Log in to ATU Bulletin"}} />
            <OAuthButtons signInWithProvider={signInWithProvider}/>
        </View>
    )
}