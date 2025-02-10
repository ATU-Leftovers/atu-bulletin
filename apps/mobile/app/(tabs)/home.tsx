import LatestNews from "@/components/latest-news";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <LatestNews />
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}