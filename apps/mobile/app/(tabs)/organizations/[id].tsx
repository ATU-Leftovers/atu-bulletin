import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { fetchOrganization, fetchOrganizationMembers, supabase } from "@/lib/supabase";
import { Tables } from "@/database.types";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrganizationDetailsScreen() {
    const { id } = useLocalSearchParams()
    const [organization, setOrganization] = useState<Tables<"organizations"> | null>(null)

    useEffect(() => {
        async function fetchOrgDetails() {
            const org = await fetchOrganization(id as string)
            setOrganization(org)
        }

        fetchOrgDetails()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>{JSON.stringify(organization, undefined, 2)}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}