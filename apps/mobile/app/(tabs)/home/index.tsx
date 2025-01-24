import { supabase } from "@/lib/supabase";
import { Stack } from "expo-router";
import { View, Text, Button } from "react-native";

export default function HomeScreen() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: "Home" }} />
            <Text>Home Screen</Text>
        </View>
    )
}