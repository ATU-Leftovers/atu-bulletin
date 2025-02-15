import React, { useEffect, useState } from "react";
import { getUser, getUserProfile, Tables, User } from "@the-leftovers/supabase"
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { supabase } from "@/lib/supabase";
import { Link, router } from "expo-router";

import { ThemeColors } from '@/constants/Colors';

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
        <SafeAreaView style={styles.container}>

            <View style={styles.body}>
                <Link href="/yourEvents" asChild style={styles.linkContainer}>
                    <Pressable>
                        <Text style={styles.linkText}>Your Events</Text>
                    </Pressable>
                </Link>
                
                <Link href="/yourNews" asChild style={styles.linkContainer}>
                    <Pressable>
                        <Text style={styles.linkText}>Your News</Text>
                    </Pressable>
                </Link>
                <Link href="/pins" asChild style={styles.linkContainer}>
                    <Pressable>
                        <Text style={styles.linkText}>Pins</Text>
                    </Pressable>
                </Link>
                <Link href="/settings" asChild style={styles.linkContainer}>
                    <Pressable>
                        <Text style={styles.linkText}>Settings</Text>
                    </Pressable>
                </Link>
            </View>
            <Pressable style={styles.signOutButtonPosition} onPress={() => {signOut()}} >
                <View style={styles.signOutButtonContainer}>
                    <Text style={styles.signOutButtonText}>Sign Out</Text>
                </View>
            </Pressable>

        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    body: {
        padding: 16,
        gap: 20,
    },

    linkContainer:
    {
        borderBottomWidth:4,
        paddingHorizontal: 24,
        paddingBottom: 16,
        borderBottomColor: ThemeColors['gray'] 
    },
    linkText:
    {
        fontSize: 24
    },

    signOutButtonPosition:
    {
        position: 'absolute',
        bottom: 40
    },
    signOutButtonContainer:
    {
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 99,
        backgroundColor: ThemeColors['atu-gold-vd']
    },
    signOutButtonText:
    {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 600,
        color: 'white'
    }
  });