import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        setIsLoading(true)

        supabase.auth.getUser().then(({ data: { user }}) => {
            setUser(user)
        })

        setIsLoading(false)
    }, [])

    
    return (
        <SafeAreaView>
            <Text>{user?.user_metadata.full_name}</Text>
            <Button onPress={() => supabase.auth.signOut()}>
                <Text>Sign Out</Text>
            </Button>
        </SafeAreaView>
    )
}