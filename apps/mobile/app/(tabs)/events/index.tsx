import { supabase } from "@/lib/supabase";
import { Stack } from "expo-router";
import { View, Text, Button } from "react-native";

export default function EventsScreen() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: true, title: "Events" }} />
            <Text>Events Screen</Text>
        </View>
    )
}