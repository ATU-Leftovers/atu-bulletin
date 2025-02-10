import { Tables } from "@the-leftovers/supabase";
import { getAllEvents } from "@the-leftovers/supabase";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventsScreen() {
    const [events, setEvents] = useState<Tables<'events'>[] | null>(null)
    // TODO: Have a concrete type instead of unknown
    const [presenceEvents, setPresenceEvents] = useState<unknown[] | null>(null)

    useEffect(() => {
        (async () => {
            const events = await getAllEvents(supabase)
            setEvents(events)
        })();
        
        (async () => {
            const response = await fetch('https://api.presence.io/atu/v1/events')

            if (response.ok) {
                const data = await response.json()
                setPresenceEvents(data)
            }
        })();
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>{JSON.stringify(events, undefined, 2)}</Text>
                {/* <Text>{JSON.stringify(presenceEvents, undefined, 2)}</Text> */}
            </ScrollView>
        </SafeAreaView>
    )
}