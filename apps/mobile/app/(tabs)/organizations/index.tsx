import { supabase } from "@/lib/supabase";
import { Stack } from "expo-router";
import { View, Text, Button } from "react-native";

export default function OrganizationsScreen() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: "Organizations" }} />
            <Text>Organizations Screen</Text>
        </View>
    )
}