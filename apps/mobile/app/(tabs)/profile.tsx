import React, { useEffect, useState } from "react";
import { getUser, getUserProfile, Tables, User } from "@the-leftovers/supabase"
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ScrollView, Text } from "react-native";
import { supabase } from "@/lib/supabase";
import { router } from "expo-router";

export default function ProfileScreen() {
    const [user, setUser] = useState<User | null>(null)
    const [profile, setProfile] = useState<Tables<'profiles'> | null>(null)

    useEffect(() => {
        (async () => {
            const user = await getUser(supabase)
            setUser(user)

            if (user) {
                const profile = await getUserProfile(supabase, user.id)
                setProfile(profile)
            }
        })()
    }, [])

    async function signOut() {
        const { error } = await supabase.auth.signOut();

        if (!error) {
            router.replace('/(auth)/login')
        }
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <Button title="Sign Out" onPress={signOut}/>
                <Text>{JSON.stringify(profile, undefined, 2)}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}