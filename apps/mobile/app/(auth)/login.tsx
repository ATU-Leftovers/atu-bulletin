import React from 'react'

import { makeRedirectUri } from 'expo-auth-session'
import { Provider } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import * as WebBrowser from "expo-web-browser"
import * as QueryParams from 'expo-auth-session/build/QueryParams'
import { View } from 'react-native'
import { Stack } from 'expo-router'
import { ProviderButtons } from '@/components/provider-buttons'

export default function LoginScreen() {
    const redirectTo = makeRedirectUri()

    async function signInWithProvider(provider: Provider) {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo,
                skipBrowserRedirect: true
            }
        })

        if (error) {
            console.log("🔥 ~ signInWithProvider:", error)
            throw error
        }

        const res = await WebBrowser.openAuthSessionAsync(data?.url ?? '', redirectTo)

        if (res.type === 'success') {
            await createSessionFromUrl(res.url)
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

        if (error) {
            console.log("🔥 ~ createSessionFromUrl:", error)
            throw error
        }

        return data.session
    }

    return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: "Log in to ATU Bulletin" }} />
            <ProviderButtons handler={signInWithProvider} />
        </View>
    )
}