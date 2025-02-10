import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getOrganizations } from "@the-leftovers/supabase";
import { supabase } from "@/lib/supabase";

export default function OrganizationsScreen() {
    const [organizations, setOrganizations] = useState(null)

    useEffect(() => {
        (async () => {
            const orgs = await getOrganizations(supabase)
            setOrganizations(orgs)
        })()
    }, [])

    // function handleOrgPress(orgId: string) {
    //     router.push(`/organizations/${orgId}`)
    // }

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>{JSON.stringify(organizations, undefined, 2)}</Text>
                {/* {organizations?.map((org) => (
                    <TouchableOpacity key={org.id} onPress={() => handleOrgPress(org.id)}>
                        <View>
                            <Text>{org.name}</Text>
                            <Text>{org.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))} */}
            </ScrollView>
        </SafeAreaView>
    )
}