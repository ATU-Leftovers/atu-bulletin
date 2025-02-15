import React, { useEffect, useState } from "react";
import { getUser, getUserProfile, Tables, User } from "@the-leftovers/supabase"
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Pressable, ScrollView, Text, View } from "react-native";
import { supabase } from "@/lib/supabase";
import { Link, router } from "expo-router";

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
        <SafeAreaView className="items-center flex-1">

            <View className="p-16 divide-y-4 divide-gray-500 "


            >
                <Link href="/yourEvents" asChild className='p-3'>
                    <Pressable>
                        <Text className='text-2xl'>Your Events</Text>
                    </Pressable>
                </Link>
                <Link href="/yourNews" asChild className='p-3'>
                    <Pressable>
                        <Text className='text-2xl'>Your News</Text>
                    </Pressable>
                </Link>
                <Link href="/pins" asChild className='p-3'>
                    <Pressable>
                        <Text className='text-2xl'>Pins</Text>
                    </Pressable>
                </Link>
                <Link href="/settings" asChild className='p-3'>
                    <Pressable>
                        <Text className='text-2xl'>Settings</Text>
                    </Pressable>
                </Link>
            </View>
            <Pressable className='absolute bottom-10' onPress={() => {signOut()}} >
                <View className='px-8 py-2 align-bottom rounded-full bg-atu-gold-vd'>
                    <Text className="text-3xl font-semibold text-center text-white">Sign Out</Text>
                </View>
            </Pressable>

        </SafeAreaView>
    )
}